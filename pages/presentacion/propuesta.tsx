import { Grid, Typography } from "@mui/material";
import { GeneralLayout } from "../../components/layouts";

const PropuestaPage = () => {
  return (
    <GeneralLayout title={"Propuesta"} description={"Propuesta del proyecto "}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <Typography sx={{ p: 10 }} variant="h1" component="h1">
            Propuesta
          </Typography>
          <Typography sx={{ p: 5, textAlign: "left", fontSize: "2.5rem" }}>
            Desarrollar un sistema único que centralice las plataformas y
            aplicaciones existentes.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography sx={{ p: 15, textAlign: "left", fontSize: "2.5rem" }}>
            Permitir las adaptaciones de nuevos módulos que satisfaga las
            necesidades externas e internar de Grupo Licon
          </Typography>
        </Grid>
      </Grid>
    </GeneralLayout>
  );
};

export default PropuestaPage;
