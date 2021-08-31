import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 9000,
    display: "flex",
    flexDirection: "row",
    marginTop: theme.spacing(5),
    flexWrap: "wrap",
    paddingLeft: "10px",
    paddingBottom: "30vh",
  },
  media: {
    height: 140,
  },
  footer: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
  },
  card: {
    width: 400,
    marginBottom: "40px"
  },
}));
export default function Contact() {
  const classes = useStyles();

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>About Us</h1>
      <div
        className={classes.root}
        style={{
          maxWidth: "100vw",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Kyle Combs
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                My info
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Jonathan Blanco
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                My info
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={classes.card}>
          <CardActionArea className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Douglas Henderson
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                My info
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={classes.card}>
          <CardActionArea className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Sakib Hossain
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                My info
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <Footer className={classes.footer} />
    </div>
  );
}
