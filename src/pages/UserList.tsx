import { useEffect, useState } from "react";
import { getUsers } from "../services/user/get-users";
import UserTable from "../components/UserTable";
import { getUsersInvitations } from "../services/user/get-user-invitation";
import { Typography } from "@mui/material";
export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  async function onSelect(usersId: number[]) {
    console.log(usersId);
    const promiseArray: Promise<any>[] = [];
    for (const userId of usersId) {
      const promise = getUsersInvitations(userId);
      promiseArray.push(promise);
    }
    await Promise.all(promiseArray);
  }
  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Panel de administrador
      </Typography>
      {loading ? (
        <p>Cargando</p>
      ) : (
        <UserTable onSelect={onSelect} users={users} />
      )}
    </div>
  );
}
