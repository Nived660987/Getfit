import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    Width: 345,
    Height: 345
    
  },
  media: {
    height: 150
  }
});

const CCard = props => {
  const classes = useStyles();
  const { img, title, level, workoutType, btn } = props;
  return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia className={classes.media} image={img} />
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{level}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{workoutType}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					{btn}
				</Button>
			</CardActions>
		</Card>
  );
};

export default CCard;
