import decode from "jwt-decode";

export const getUser = async (token: string) => {
  const data: { [key: string]: any } = decode(token);

  const res = await fetch(
    `https://api.tasks.griffindow.com/v1/users/${data.uuid}`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    }
  );
  return res.json();
};

export const postUser = async (email: string, password: string) => {
  const res = await fetch("https://api.tasks.griffindow.com/v1/users", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  return res.json();
};
