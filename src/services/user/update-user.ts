import { link } from "../api";

export async function updateUser(userId: number, body: any) {
  const url = `${link}/users/${userId}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  const data = await response.json();
  return data;
}
