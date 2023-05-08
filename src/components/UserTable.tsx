import { useState } from "react";
import { User } from "../models/user";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface UserTableProps {
  users: User[];
  onSelect: (selected: number[]) => void;
}
export default function UserTable(props: UserTableProps) {
  const [selected, setSelected] = useState<number[]>([]);

  const navigate = useNavigate();

  const handleSelect = (id: number) => {
    const index = selected.indexOf(id);
    if (index === -1) {
      setSelected([...selected, id]);
    } else {
      setSelected(selected.filter((s) => s !== id));
    }
  };

  const handleSelectAll = () => {
    if (selected.length === props.users.length) {
      setSelected([]);
    } else {
      setSelected(props.users.map((u) => u.id));
    }
  };

  const isSelected = (id: number) => {
    return selected.indexOf(id) !== -1;
  };

  const onConfirmSelection = () => {
    props.onSelect(selected);
  };
  const onCreate = () => {
    navigate(`/create`);
  };
  return (
    <Paper>
      <div>
        <Button onClick={onCreate}>Agregar usuarios</Button>
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={
                    selected.length > 0 && selected.length < props.users.length
                  }
                  checked={selected.length === props.users.length}
                  onChange={handleSelectAll}
                />
              </TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Detalle</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido Materno</TableCell>
              <TableCell>Apellido Paterno</TableCell>
              <TableCell>Correo electrónico</TableCell>
              <TableCell>Cargo</TableCell>
              <TableCell>Empresa</TableCell>
              <TableCell>Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.users.map((user) => {
              const isUserSelected = isSelected(user.id);
              return (
                <TableRow
                  key={user.id}
                  hover
                  selected={isUserSelected}
                  onClick={() => handleSelect(user.id)}
                >
                  <TableCell padding="checkbox">
                    <Checkbox checked={isUserSelected} />
                  </TableCell>
                  <TableCell>{user.id}</TableCell>
                  <Button onClick={() => navigate(`/${user.id}`)}>Ver</Button>
                  <TableCell>{user.nombre}</TableCell>
                  <TableCell>{user.apellidoMaterno}</TableCell>
                  <TableCell>{user.apellidoPaterno}</TableCell>
                  <TableCell>{user.correoElectronico}</TableCell>
                  <TableCell>{user.cargo}</TableCell>
                  <TableCell>{user.empresa}</TableCell>
                  <TableCell>{user.estado}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <Button onClick={onConfirmSelection}>Descargar invitaciones</Button>
      </div>
    </Paper>
  );
}
