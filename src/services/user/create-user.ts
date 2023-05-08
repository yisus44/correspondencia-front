import { link } from "../api";

export async function createUser(body: any) {
  const url = `${link}/users`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  const data = await response.json();
  return data;
}
