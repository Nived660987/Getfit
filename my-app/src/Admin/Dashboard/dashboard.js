import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Person} from '@material-ui/icons';
import App2 from "../Users/App2";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import AddWorkout from '../AddWorkout';
import EditWorkout from '../EditWorkout';
import {useState, createContext}  from 'react';
import DeleteWorkout from "../DeleteWorkout";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerContainer: {
		overflow: 'auto',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

export default function ClippedDrawer() {
    const classes = useStyles();
    const [Dash, setDash] = useState("Users")
    const setDashboard = ()  =>{
        switch (Dash) {
			case "Users":
				return <App2 />;
			case "Add Workout":
				return <AddWorkout />;
			case "Update Workout":
				return <EditWorkout />;
			case "delete Workout":
				return <DeleteWorkout />;

			default:
				break;
		}
    }

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" color="primary" className={classes.appBar}>
				<Toolbar>
					<Typography variant="h6" noWrap color="secondary">
						GET-FIT Dashboard
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<Toolbar />
				<div className={classes.drawerContainer}>
					<List>
						<ListItem button onClick={(e) => setDash('Users')}>
							<ListItemIcon>
								<Person />
							</ListItemIcon>
							<ListItemText primary="Users" />
						</ListItem>
						<ListItem button onClick={(e) => setDash('Add Workout')}>
							<ListItemIcon>
								<AddCircleIcon />
							</ListItemIcon>
							<ListItemText primary="Add Workout" />
						</ListItem>
						<ListItem button onClick={(e) => setDash('Update Workout')}>
							<ListItemIcon>
								<FitnessCenterIcon />
							</ListItemIcon>
							<ListItemText primary="Update Workout" />
						</ListItem>
						<ListItem button onClick={(e) => setDash('delete Workout')}>
							<ListItemIcon>
								<DeleteForeverIcon />
							</ListItemIcon>
							<ListItemText primary="delete Workout" />
						</ListItem>
					</List>
					<Divider />
					<List>
						<ListItem button>
							<ListItemIcon>
								<ExitToAppIcon />
							</ListItemIcon>
							<ListItemText primary="Logout" />
						</ListItem>
					</List>
				</div>
			</Drawer>
			<main className={classes.content}>
				<Toolbar />
				{setDashboard()}
			</main>
		</div>
	);
}
