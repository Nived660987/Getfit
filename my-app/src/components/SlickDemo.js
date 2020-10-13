import React, {Component} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import PropTypes from 'prop-types';
import ProductHeroLayout from './view/ProductHeroLayout';

const styles = (theme) => ({
    background: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundColor: '#7fc7d9', // Average color of the background image.
      backgroundPosition: 'center',
    },
    button: {
      minWidth: 200,
    },
    h5: {
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(4),
      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(10),
      },
    },
    more: {
      marginTop: theme.spacing(2),
    },
  });

export class SlickDemo extends Component {
    render(){
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };
return(
    <div>
    <Slider {...settings}>
    <div className="wdt">
        <img  className="img" src= {'./images/homeworkout1.jpg'} className="img"/>

        <ProductHeroLayout backgroundClassName={classes.background}>
        <Typography color="inherit" align="center" variant="h2" marked="center">
          Stay Motivated!
        </Typography>
        <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
          Enjoy the different workouts. Don't Quit!
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
          component="a"
          href="/premium-themes/onepirate/sign-up/"
        >
          Register
        </Button>
        <Typography variant="body2" color="inherit" className={classes.more}>
          Discover the experience
        </Typography>
        </ProductHeroLayout>

    </div>
    <div className="wdt">
        <img className="img" src= {'./images/home-workouts2.jpg'} className="img"/>

        <ProductHeroLayout backgroundClassName={classes.background}>
        <Typography color="inherit" align="center" variant="h2" marked="center">
          Stay Motivated!
        </Typography>
        <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
          Enjoy the different workouts. Don't Quit!
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
          component="a"
          href="/premium-themes/onepirate/sign-up/"
        >
          Register
        </Button>
        <Typography variant="body2" color="inherit" className={classes.more}>
          Discover the experience
        </Typography>
        </ProductHeroLayout>

    </div>
    <div className="wdt">
        <img className="img" src= {'./images/yogameditation.jpg'} className="img"/>

        <ProductHeroLayout backgroundClassName={classes.background}>
        <Typography color="inherit" align="center" variant="h2" marked="center">
          Stay Motivated!
        </Typography>
        <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
          Enjoy the different workouts. Don't Quit!
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
          component="a"
          href="/premium-themes/onepirate/sign-up/"
        >
          Register
        </Button>
        <Typography variant="body2" color="inherit" className={classes.more}>
          Discover the experience
        </Typography>
        </ProductHeroLayout>

    </div>
</Slider>
    </div>     
    



      
    );
  }
}

SlickDemo.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default SlickDemo;