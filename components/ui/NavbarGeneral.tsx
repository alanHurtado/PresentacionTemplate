import { AppBar, Button, Link, Toolbar, Typography } from "@mui/material";

export const NavbarGeneral = () => {
  return (
    <AppBar
      position="static"
      color="default"
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
            href="/presentacion/vision"
            sx={{ my: 1, mx: 1.5 }}
          >
            Visión
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="/presentacion/propuesta"
            sx={{ my: 1, mx: 1.5 }}
          >
            Propuesta
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="/presentacion/objetivo"
            sx={{ my: 1, mx: 1.5 }}
          >
            Objetivo
          </Link>
        </nav>
        <Button href="/auth/sign-in" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Ingresar
        </Button>
        <Button href="/auth/sign-up" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Registro
        </Button>
      </Toolbar>
    </AppBar>
  );
};
