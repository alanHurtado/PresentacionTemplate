import { Grid, Typography } from "@mui/material";
import { GeneralLayout } from "../../components/layouts";

const ObjetivoPage = () => {
  return (
    <GeneralLayout title={"Objetivo"} description={"Objetivo del proyecto "}>
      <Grid container justifyContent={'center'} spacing={2}>
        <Grid item xs={12} sm={5}>
          <Typography sx={{ p: 10 }} variant="h1" component="h1">
            Objetivo
          </Typography>
          <Typography sx={{ p: 5, textAlign: "left", fontSize: "2.5rem" }}>
            Crear un sistema adaptable y extensible a las necesidades internas y
            externas de Grupo Licon el cual logre brindar nuevas formas de
            comunicación, optimizar los procesos de los colaboradores, y brindar
            una mejor atención al cliente.
          </Typography>
        </Grid>
      </Grid>
    </GeneralLayout>
  );
};

export default ObjetivoPage;
