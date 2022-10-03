import { IList, ITask } from "../interfaces/entities";
import { timeOut, TOKEN } from "../utils/temp";

const testData = {
  lists: [
    {
      uuid: "c73b698a-2a8c-420a-9264-f3a0db79771f",
      name: "Groceries",
      order: 0,
      tasks: [
        {
          uuid: "2d3cb1af-5dba-417d-8e49-2a69bfe8886b",
          name: "Vegetables",
          order: 0,
          complete: false,
        },
        {
          uuid: "e062b315-f294-4d8a-809b-e7ed2a19279e",
          name: "Rice",
          order: 1,
          complete: false,
        },
        {
          uuid: "ee7bf573-5a13-489e-bdc7-208acf8472e5",
          name: "Meats",
          order: 2,
          complete: false,
        },
      ],
    },
    {
      uuid: "f42bcaee-72b3-418d-bedf-49cfb94a964e",
      name: "Debts",
      order: 1,
      tasks: [
        {
          uuid: "cdd97782-5efa-46d8-8a41-acc37be86226",
          name: "Credit card",
          order: 0,
          complete: false,
        },
        {
          uuid: "8e9c40f3-5029-4da6-af36-7d822e3a35a1",
          name: "Line of credit",
          order: 1,
          complete: false,
        },
        {
          uuid: "beb09685-1b10-4d29-ae76-7cdebf2540c9",
          name: "Student loan",
          order: 2,
          complete: false,
        },
      ],
    },
    {
      uuid: "a428211c-e5ba-43df-bcd7-de8b4c15d181",
      name: "Presentations",
      order: 2,
      tasks: [
        {
          uuid: "c264576e-bba7-4b6e-90fc-a360f39c05d8",
          name: "React",
          order: 0,
          complete: false,
        },
        {
          uuid: "8d2d4729-f20f-4cd4-ab31-546921f12d0f",
          name: "Redux",
          order: 1,
          complete: false,
        },
        {
          uuid: "0a512bf1-eb27-4677-98ba-329ff8daf0c0",
          name: "Nodejs",
          order: 2,
          complete: false,
        },
      ],
    },
  ],
};

export const getListsApi = async (token: string) => {
  await timeOut(500);
  if (token !== TOKEN) return;
  return testData.lists;
};

export const postListApi = async (token: string, list: IList) => {
  await timeOut(500);
  if (token !== TOKEN) return;
  return list;
};

export const putListApi = async (token: string, list: IList) => {
  await timeOut(500);
  if (token !== TOKEN) return;
  return list;
};

export const deleteListApi = async (token: string, uuid: string) => {
  await timeOut(500);
  if (token !== TOKEN) return;
  return true;
};

export const postTaskApi = async (
  token: string,
  listUuid: string,
  task: ITask
) => {
  await timeOut(500);
  if (token !== TOKEN || !listUuid) return;
  return task;
};

export const putTaskApi = async (
  token: string,
  listUuid: string,
  task: ITask
) => {
  await timeOut(500);
  if (token !== TOKEN || !listUuid) return;
  return task;
};

export const deleteTaskApi = async (
  token: string,
  listUuid: string,
  uuid: string
): Promise<boolean> => {
  await timeOut(500);
  if (token !== TOKEN || !listUuid || !uuid) return false;
  return true;
};
