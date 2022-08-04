import { Card, Grid } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { ColoaboradoresLAyout } from "../../components/layouts";

const CronogramaPage = () => {
  return (
    <ColoaboradoresLAyout title={"Cronograma"} description={"Vista Cronograma"}>
      <Grid container justifyContent={"center"}>
        <Grid item justifyContent={"center"} xs={8}>
          <Card>
            <CardMedia
              component="img"
              sx={{
                justifyContent: "center",
                textAlign: "center",
                width: "auto",
              }}
              image={"/alcance.png"}
              alt={"alcance"}
            />
          </Card>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"}>
        <Grid item justifyContent={"center"} xs={8}>
          <Card>
            <CardMedia
              component="img"
              sx={{ width: "auto" }}
              image={"/cronograma.png"}
              alt={"Cronograma"}
            />
          </Card>
        </Grid>
      </Grid>
    </ColoaboradoresLAyout>
  );
};

export default CronogramaPage;
