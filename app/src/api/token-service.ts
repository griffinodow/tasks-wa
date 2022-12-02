export const postToken = async (email: string, password: string) => {
  const res = await fetch("https://api.tasks.griffindow.com/v1/token", {
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
