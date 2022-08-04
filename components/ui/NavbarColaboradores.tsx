import { AppBar, Button, Link, Toolbar, Typography } from "@mui/material";

export const NavBarColaboradores = () => {
  return (
    <AppBar
      position="static"
      
      elevation={0}
      sx={{ backgroundColor:"#F7D9C3", borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h5" color="red" noWrap sx={{ flexGrow: 1 }}>
          <Link href="/users">Grupo Licon Seccion CLientes</Link>
        </Typography>
        <nav>
          <Link
            variant="button"
            color="text.primary"
            href="/presentacion/cronograma"
            sx={{ my: 1, mx: 1.5 }}
          >
            Cronograma
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};
