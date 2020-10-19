import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import { BrowserRouter as Router, Link as RouterLink, Switch, Route } from "react-router-dom";
const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    
    {
      url:
        'https://i.pinimg.com/564x/73/16/32/731632e44bdf21489d4d7632e59a8894.jpg',
      title: 'GYM',
      width: '33%',
      
    },
    
    
    {
      url:
        'https://www.safwallpapers.com/files/1524485537_Yoga-Girls-Wallpapers-For-Laptop.jpg',
      title: 'Yoga',
      width: '33%',
    },
    {
      url:
        'https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_limit,w_695/v1537210711/dkwlqnj2sgxmdpy2mv6z.png',
      title: 'Beauty Sleep ',
      width: '33%',
    },
    {
      url:
        'https://images.unsplash.com/photo-1533727937480-da3a97967e95?auto=format&fit=crop&w=400&q=80',
      title: 'App1',
      width: '33%',
    },
    {
      url:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/afro-american-couple-doing-yoga-royalty-free-image-598708752-1548713240.jpg?crop=1.00xw:0.751xh;0,0.153xh&resize=980:*',
      title: 'Meditation',
      width: '33%',
    },
    {
      url:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/salad-mix-plate-shot-from-above-on-rustic-wooden-royalty-free-image-1018199524-1556130377.jpg',
      title: 'Diet',
      width: '33%',
    },

    {
      url:
        'https://mediad.publicbroadcasting.net/p/wsiu/files/styles/large/public/202004/CoronaVirusHeader-Final-3.jpg',
      title: 'Covid',
      height: '80%', 
      width: '99%',
    },
    
    
  ];

  return (
		<Container className={classes.root} component="section">
			<Typography variant="h4" marked="center" align="center" component="h2">
				For all tastes and all desires
			</Typography>
			<div className={classes.images}>
				{images.map((image) => (
					<ButtonBase
						key={image.title}
						href={'../category/' + image.title}
						className={classes.imageWrapper}
						style={{
							width: image.width,
						}}
					>
						<div
							className={classes.imageSrc}
							style={{
								backgroundImage: `url(${image.url})`,
							}}
						/>
						<div className={classes.imageBackdrop} />
						<div className={classes.imageButton}>
							<Typography component="h3" variant="h6" color="inherit" className={classes.imageTitle}>
								{image.title}
								<div className={classes.imageMarked} />
							</Typography>
						</div>
					</ButtonBase>
				))}
			</div>
		</Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);