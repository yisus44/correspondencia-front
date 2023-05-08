import { link } from "../api";

export async function deleteUser(userId: number) {
  const url = `${link}/users/${userId}`;
  const response = await fetch(url, { method: "DELETE" });
  const data = await response.json();
  return data;
}
