import { AppBar, Button, Link, Toolbar, Typography } from "@mui/material";

export const NavBarClientes = () => {
  return (
    <AppBar
      position="static"
      
      elevation={0}
      sx={{ backgroundColor:"#F0D9C5", borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h5" color="red" noWrap sx={{ flexGrow: 1 }}>
          <Link href="/users">Grupo Licon Seccion CLientes</Link>
        </Typography>
        <nav>
          <Link
            variant="button"
            color="text.primary"
            href="/users/clientes"
            sx={{ my: 1, mx: 1.5 }}
          >
            Perfil
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="/users/admins"
            sx={{ my: 1, mx: 1.5 }}
          >
            Noticias
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="/users/colaboradores"
            sx={{ my: 1, mx: 1.5 }}
          >
            Notificaciones
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="/users/colaboradores"
            sx={{ my: 1, mx: 1.5 }}
          >
            Otros
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="/users/colaboradores"
            sx={{ my: 1, mx: 1.5 }}
          >
            Soporte
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};
