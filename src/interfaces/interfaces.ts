export interface IUser {
  token: string;
  uuid: string;
  name: string;
  email: string;
}

export interface IError {
  status: number;
  message: string;
}

export interface IList {
  uuid: string;
  name: string;
  order: number;
  tasks: ITask[];
}

export interface ITask {
  listUuid: string;
  uuid: string;
  name: string;
  order: number;
  complete: boolean;
}
