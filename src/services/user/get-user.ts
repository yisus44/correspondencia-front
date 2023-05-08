import { link } from "../api";

export async function getUser(userId: number) {
  const url = `${link}/users/${userId}`;
  const response = await fetch(url, { method: "GET" });
  const data = await response.json();
  return data;
}
