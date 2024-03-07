import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function QuestionCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          Here question display
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Here subject will display
        </Typography>
        <br></br>
        <Typography variant="body2" color="text.secondary">
          votes 852 ans 542 views 968
        </Typography>
     
      </CardContent>
      <CardActions>
        <div>
          <button className="button">Answer here</button>
        </div>

        {/* <Button  size="small">
          Answer
        </Button> */}
      </CardActions>
    </Card>
  );
}
