import { link } from "../api";

export async function getUsersInvitations(userId: number) {
  const url = `${link}/users/invitations/${userId}`;
  const response = await fetch(url, { method: "GET" });
  console.log(response);
  if (!response) return;
  const blob = await response.blob();
  var file = window.URL.createObjectURL(blob);
  window.open(file, "_blank");
}
