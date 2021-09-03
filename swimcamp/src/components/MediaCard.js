import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({ blogTitle, blogText, blogPic }) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)" }}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={blogPic}
          title="Contemplative Reptile"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {blogTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {blogText}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
