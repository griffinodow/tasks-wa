export const initialStateListWithTask = {
  user: {
    data: {
      uuid: "c462756f-be93-4820-aff8-8c421e742456",
      name: "Griffin",
      email: "griffin@griffindow.com",
      token: "test-uuid",
    },
    error: null,
    status: 2,
  },
  lists: {
    selected: "c73b698a-2a8c-420a-9264-f3a0db79771f",
    ids: ["c73b698a-2a8c-420a-9264-f3a0db79771f"],
    entities: {
      "c73b698a-2a8c-420a-9264-f3a0db79771f": {
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
        ],
      },
    },
    status: 2,
  },
};
