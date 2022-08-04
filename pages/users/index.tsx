import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { UserLayout } from "../../components/layouts/UserLayout";
const tiers = [
  {
    title: "Clientes",
    description: [
      "Informacion",
      "Soporte Callcenter",
      "Cursos",
      "Tipos de clientes",
    ],
    href: "clientes",
    buttonText: "Ver Apartado",
    buttonVariant: "outlined",
  },
  {
    title: "Administradores",
    subheader: "Cuentas de control",
    description: [
      "Gestor de contenidos",
      "Lideres de area",
      "Administrador de usuarios",
      "Administrador por area",
    ],
    href: "admins",
    buttonText: "Ver Perfiles",
    buttonVariant: "contained",
  },
  {
    title: "Colaboradores",
    description: [
      "Subdirector",
      "Gerente",
      "Nivel de colaborador",
      "Procesos Especificos",
      "Procesos General",
    ],
    href: "colaboradores",
    buttonText: "Ver Perfiles",
    buttonVariant: "outlined",
  },
];

function PricingContent() {
  return (
    <UserLayout title={"Users"} description={"Página de usuarios principales "}>
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Desarrollo
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Generar las principales rutas e historias de usario para el sistema
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  ></Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    href={`users/${tier.href}`}
                    variant={tier.buttonVariant as "outlined" | "contained"}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      ></Container>
    </UserLayout>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
