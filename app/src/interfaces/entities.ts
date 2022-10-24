/**
 * The user interface.
 */
export interface IUser {
  token: string;
  uuid: string;
  name: string;
  email: string;
}

/**
 * The error interface.
 */
export interface IError {
  status: number;
  message: string;
}

/**
 * The list interface.
 */
export interface IList {
  uuid: string;
  name: string;
  order: number;
  tasks: ITask[];
}

/**
 * The task interface.
 */
export interface ITask {
  listUuid: string;
  uuid: string;
  name: string;
  order: number;
  complete: boolean;
}
