import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

export const Bienvenida = () => {
  return (
    <Grid container component="main" sx={{ height: "93vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={5}
        sx={{
          backgroundImage: "url(/licon1.png)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 2,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardMedia
              component="img"
              sx={{
                // 16:9
                pt: "10%",
              }}
              image="/GPL.png"
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                gutterBottom
                variant="h2"
                align="center"
                fontWeight="400"
                component="h2"
              >
                Inicialización PWA
              </Typography>
              <Typography
                fontWeight="400"
                align="center"
                gutterBottom
                variant="h2"
                component="h2"
              >
                Grupo Licon
              </Typography>
              <Typography variant='h5' fontWeight="400" align="right" sx={{ mt: "40%" }}>
                Desarrollo de Soluciones Tecnológicas
              </Typography>
              <Typography variant='h5' fontWeight="400" align="right">
                Alan Astorga Hurtado
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="/presentacion/situacion-actual" size="small">Siguiente</Button>
            </CardActions>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};
