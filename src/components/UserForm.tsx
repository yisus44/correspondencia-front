import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../services/user/create-user";
import { User } from "../models/user";
import { Button, Grid, TextField } from "@mui/material";

export default function UserForm() {
  const [user, setUser] = useState<User>({
    id: 0,
    nombre: "",
    apellidoMaterno: "",
    apellidoPaterno: "",
    cargo: "",
    empresa: "",
    calle: "",
    numeroExt: "",
    numeroInt: "",
    colonia: "",
    municipio: "",
    estado: "",
    codigoPostal: "",
    telefono: "",
    correoElectronico: "",
    fechaNacimiento: new Date(),
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setUser((prevUser) => {
      const newUser = { ...prevUser, [name]: value };
      const updatedUser = {
        ...newUser,
        fechaNacimiento: new Date(newUser.fechaNacimiento),
      };
      return updatedUser;
    });
  };

  const handleCreate = (ev: any) => {
    ev.preventDefault();
    setLoading(true);
    createUser(JSON.stringify(user))
      .then(() => {
        navigate(`/`);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="nombre"
            label="Nombre"
            fullWidth
            value={user.nombre}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="apellidoPaterno"
            label="Apellido paterno"
            fullWidth
            value={user.apellidoPaterno}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="apellidoMaterno"
            label="Apellido materno"
            fullWidth
            value={user.apellidoMaterno}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="cargo"
            label="Cargo"
            fullWidth
            value={user.cargo}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="empresa"
            label="Empresa"
            fullWidth
            value={user.empresa}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="calle"
            label="Calle"
            fullWidth
            value={user.calle}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="numeroExt"
            label="Número exterior"
            fullWidth
            value={user.numeroExt}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="numeroInt"
            label="Número interior"
            fullWidth
            value={user.numeroInt}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="colonia"
            label="Colonia"
            fullWidth
            value={user.colonia}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="municipio"
            label="Municipio"
            fullWidth
            value={user.municipio}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="estado"
            label="Estado"
            fullWidth
            value={user.estado}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="codigoPostal"
            label="Código postal"
            fullWidth
            value={user.codigoPostal}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="telefono"
            label="Teléfono"
            fullWidth
            value={user.telefono}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="correoElectronico"
            label="Correo electrónico"
            fullWidth
            value={user.correoElectronico}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="fechaNacimiento"
            label="Fecha de nacimiento"
            type="date"
            fullWidth
            value={user?.fechaNacimiento?.toISOString().substring(0, 10)}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            disabled={loading}
            onClick={handleCreate}
          >
            {loading ? "Guardando..." : "Guardar"}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
