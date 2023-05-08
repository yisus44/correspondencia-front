import { link } from "../api";

export async function getUsers() {
  const url = `${link}/users`;
  const response = await fetch(url, { method: "GET" });
  const data = await response.json();
  return data;
}
