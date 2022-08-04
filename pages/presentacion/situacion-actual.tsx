import { ListItem, Grid, Stack, Typography, Box } from "@mui/material";
import { GeneralLayout } from "../../components/layouts";

const Situacion = () => {
  return (
    <GeneralLayout
      title={"Situacion Actual"}
      description={"Infromación de la descripcion actual "}
    >
      <Box
        sx={{ mt: 10, height: "93vh", width: "100vw" }}
        alignContent="center"
        textAlign="center"
      >
        <Typography variant="h1" component="h1">
          Situación Actual
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{ p: 5, width: "100vw" }}
          alignContent="center"
          textAlign="center"
        >
          <Grid item xs={12} sm={6}>
            <Stack>
              <ListItem
                sx={{
                  backgroundColor: "red",
                  color: "white",
                  fontSize: "2rem",
                  fontWeight: "700",
                }}
              >
                Aplicaciones Actuales
              </ListItem>
              <ListItem
                sx={{
                  backgroundColor: "#F4F1DE",
                  fontSize: "1.5rem",
                  fontWeight: "400",
                }}
              >
                Liconet
              </ListItem>
              <ListItem
                sx={{
                  backgroundColor: "#F0D9C5",
                  fontSize: "1.5rem",
                  fontWeight: "400",
                }}
              >
                Licontigo
              </ListItem>
              <ListItem
                sx={{
                  backgroundColor: "#F4F1DE",
                  fontSize: "1.5rem",
                  fontWeight: "400",
                }}
              >
                LiconApp
              </ListItem>
              <ListItem
                sx={{
                  backgroundColor: "#F0D9C5",
                  fontSize: "1.5rem",
                  fontWeight: "400",
                }}
              >
                Aplicaciones por áreas
              </ListItem>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack>
              <ListItem
                sx={{
                  backgroundColor: "red",
                  color: "white",
                  fontSize: "2rem",
                  fontWeight: "700",
                }}
              >
                Proyectos a futuro
              </ListItem>
              <ListItem
                sx={{
                  backgroundColor: "#F4F1DE",
                  fontSize: "1.5rem",
                  fontWeight: "400",
                }}
              >
                App clima Laboral
              </ListItem>
              <ListItem
                sx={{
                  backgroundColor: "#F0D9C5",
                  fontSize: "1.5rem",
                  fontWeight: "400",
                }}
              >
                Liconet
              </ListItem>
              <ListItem
                sx={{
                  backgroundColor: "#F4F1DE",
                  fontSize: "1.5rem",
                  fontWeight: "400",
                }}
              >
                Plataforma de cursos
              </ListItem>
              <ListItem
                sx={{
                  backgroundColor: "#F0D9C5",
                  fontSize: "1.5rem",
                  fontWeight: "400",
                }}
              >
                Software para licitaciones
              </ListItem>
              <ListItem
                sx={{
                  backgroundColor: "#F4F1DE",
                  fontSize: "1.5rem",
                  fontWeight: "400",
                }}
              >
                Entre Otros
              </ListItem>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </GeneralLayout>
  );
};

export default Situacion;
