export const initialStateEmptyList = {
  user: {
    data: {
      uuid: "test-uuid",
      name: "Griffin",
      email: "griffin@griffindow.com",
      token: "test-token",
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
        tasks: [],
      },
    },
    status: 2,
  },
};
