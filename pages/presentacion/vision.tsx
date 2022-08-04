import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { GeneralLayout } from "../../components/layouts";
import { Slideshow } from "../../components/presentacion";

const images = [
  "Licon1.png",
  "imagen2.png",
  "imagen1.png",
  "imagen3.png",
  "imagen4.png",
  "imagen5.png",
  "imagen6.png",
];

const VisionPage = () => {
  return (
    <GeneralLayout
      title={"Vision"}
      description={"Vison del protecto grupo licon"}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <Typography sx={{ p: 10 }} variant="h1" component="h1">
            Visión
          </Typography>
          <Typography sx={{ p: 15, textAlign: "left", fontSize: "2.5rem" }}>
            Tener un único Sistema
          </Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Card>
            <CardMedia sx={{ mt: 10, ml: 5, mr: 5 }}>
              <Slideshow images={images} />
            </CardMedia>
            <CardContent>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "700",
                  fontSize: "2.5rem",
                }}
              >
                Sistema Grupo Licon
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </GeneralLayout>
  );
};

export default VisionPage;
