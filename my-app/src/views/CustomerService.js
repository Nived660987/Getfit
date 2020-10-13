import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../components/Typography';

const styles = (theme) => ({
	root: {
		display: 'flex',
		color: '#02299e',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: theme.spacing(9),
		marginBottom: theme.spacing(9),
	},
	button: {
		background: 'linear-gradient(45deg, #001e96 15%, #0b83b3  90%)',
		border: '3px solid currentColor',
		borderRadius: 0,
		height: 'auto',
		padding: theme.spacing(2, 5),
	},
	link: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
	},
	buoy: {
		width: 60,
	},
});

function CustomerService(props) {
	const { classes } = props;

	return (
		<Container className={classes.root} component="section">
			<Button className={classes.button}>
				<Typography variant="h4" component="span">
					<h2 style={{ color: '#ffff' }}>Got any questions? Need help?</h2>
				</Typography>
			</Button>
			<Typography variant="subtitle1" className={classes.link}>
				We are here to help. Get in touch!
			</Typography>
		</Container>
	);
}

CustomerService.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomerService);
