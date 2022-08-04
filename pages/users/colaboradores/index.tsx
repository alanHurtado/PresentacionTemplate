import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ColoaboradoresLAyout } from "../../../components/layouts/Colaboradores.Layout";
const tiers = [
//   {
//     title: "Subdirección Instituto",
//     description: ["Pendiente Entrevista"],
//   },
  {
    title: "Direccion Inteligencia de Negocios",
    description: [
      "Aplicacion Cursos",
      "App ambiente laboral",
      "App por areas...",
    ],
  },
  {
    title: "Direccion Comercial",
    description: ["App Lisitaciones", "Falta Entrevista"],
  },
  {
    title: "Subdireccion Técnica",
    description: ["App de herramientas para asesores", "Falta ENtrevista"],
  },
  {
    title: "Subdireccion Ingenieria",
    description: ["Pendiente Entrevista"],
  },
  {
    title: "Subdireccion Logistica",
    description: ["Pendiente Entrevista"],
  },
  {
    title: "Subdireccion Operaciones",
    description: [
      "App para bitácoras (Gerencia Calidad)",
      "Acceso a la información en tiempo real",
      "App para enfoque de Etica",
    ],
  },
];

function PricingContent() {
  return (
    <ColoaboradoresLAyout
      title={"Colobaoradores"}
      description={"Página de Colaboradores principales "}
    >
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
          Secciones por Colaboradores
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Lluvia de ideas y proyectos propuestos
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="xl" component="main">
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
    </ColoaboradoresLAyout>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
