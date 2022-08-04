import { AppBar, Button, Link, Toolbar, Typography } from "@mui/material";

export const NavbarUsers = () => {
  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h5" color="red" noWrap sx={{ flexGrow: 1 }}>
          <Link href="/">Grupo Licon</Link>
        </Typography>
        <nav>
          <Link
            variant="button"
            color="text.primary"
            href="/users/clientes"
            sx={{ my: 1, mx: 1.5 }}
          >
            Clientes
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="/users/admins"
            sx={{ my: 1, mx: 1.5 }}
          >
            Administradores
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="/users/colaboradores"
            sx={{ my: 1, mx: 1.5 }}
          >
            Colaboradores
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};
