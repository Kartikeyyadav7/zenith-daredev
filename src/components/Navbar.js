import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../styles/Navbar";
import { Link } from "react-router-dom";
import Zero from "../assets/logo.png";

function Navbar({ classes }) {
	const Navbar = (
		<div className={classes.root}>
			<AppBar position="static" className={classes.navbar}>
				<Toolbar className={classes.container}>
					<Button
						color="inherit"
						className={classes.title}
						component={Link}
						to="/"
					>
						<img src={Zero} alt="logo-zero" />
					</Button>
					<div>
						<Switch />
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);

	return <div>{Navbar}</div>;
}

export default withStyles(styles)(Navbar);
