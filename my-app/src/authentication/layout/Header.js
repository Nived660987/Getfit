import React from 'react';
import AuthOptions from '../auth/AuthOptions';
import '../misc/ErrorNotice.css';
import Link from '@material-ui/core/Link';
import AppBar from '../../components/AppBar';
import Button from '../../components/Button';
import './Header.css';

export default function Header() {
	return (
		<div className="header">
			<AppBar position="fixed">
				<header id="iheader">
					<div className="title">
						<Link variant="h6" fontSize="24" underline="none" color="inherit" href="/">
							{'Get-Fit'}
						</Link>
					</div>
					<Button
						color="secondary"
						variant="contained"
						size="small"
						padding-left="150px"
						component="a"
						href="/Adminlogin"
					>
						Admin
					</Button>
					<div className="auth">
						<AuthOptions />
					</div>
				</header>
			</AppBar>
		</div>
	);
}
