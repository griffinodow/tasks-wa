import * as cdk from "aws-cdk-lib";
import { RemovalPolicy } from "aws-cdk-lib";
import { DnsValidatedCertificate } from "aws-cdk-lib/aws-certificatemanager";
import {
  AllowedMethods,
  Distribution,
  OriginAccessIdentity,
  SecurityPolicyProtocol,
  ViewerProtocolPolicy,
} from "aws-cdk-lib/aws-cloudfront";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";
import { CanonicalUserPrincipal, PolicyStatement } from "aws-cdk-lib/aws-iam";
import {
  AaaaRecord,
  ARecord,
  HostedZone,
  RecordTarget,
} from "aws-cdk-lib/aws-route53";
import { CloudFrontTarget } from "aws-cdk-lib/aws-route53-targets";
import { BlockPublicAccess, Bucket } from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class TasksStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Domain
    const domain = "griffindow.com";
    const subdomain = `tasks.${domain}`;

    // The hosted zone
    const zone = HostedZone.fromLookup(this, "Zone", { domainName: domain });

    // TLS domain cert
    const certificate = new DnsValidatedCertificate(this, "SiteCertificate", {
      domainName: subdomain,
      hostedZone: zone,
      region: "us-east-1",
    });

    // Identity for CloudFront to access S3 Bucket
    const identity = new OriginAccessIdentity(this, "cloudfront-OAI", {
      comment: `OAI for ${domain}`,
    });

    // S3 Bucket to store website.
    const bucket = new Bucket(this, "Bucket", {
      bucketName: subdomain,
      publicReadAccess: false,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // S3 Bucket access resource policy
    bucket.addToResourcePolicy(
      new PolicyStatement({
        actions: ["s3:GetObject"],
        resources: [bucket.arnForObjects("*")],
        principals: [
          new CanonicalUserPrincipal(
            identity.cloudFrontOriginAccessIdentityS3CanonicalUserId
          ),
        ],
      })
    );

    bucket.grantRead(identity);

    // CloudFront distrubtion
    const distribution = new Distribution(this, "WebsiteDistribution", {
      certificate: certificate,
      defaultRootObject: "index.html",
      domainNames: [subdomain],
      minimumProtocolVersion: SecurityPolicyProtocol.TLS_V1_2_2021,
      errorResponses: [],
      defaultBehavior: {
        origin: new S3Origin(bucket, { originAccessIdentity: identity }),
        compress: true,
        allowedMethods: AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
    });

    // Route53
    new ARecord(this, "WebsiteAAliasRecord", {
      recordName: subdomain,
      target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
      zone,
    });

    new AaaaRecord(this, "WebsiteAAAAAliasRecord", {
      recordName: subdomain,
      target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
      zone,
    });

    // Deploy site contents to S3 bucket
    new BucketDeployment(this, "DeployWithInvalidation", {
      sources: [Source.asset("./app/build")],
      destinationBucket: bucket,
      distribution,
      distributionPaths: ["/*"],
    });
  }
}
