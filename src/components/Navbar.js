import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../styles/Navbar";
import { Link } from "react-router-dom";
import ZeroLight from "../assets/logolight.png";
import ZeroDark from "../assets/logodark.png";
import Tooltip from "@material-ui/core/Tooltip";

function Navbar({ classes, setTheme, changeTheme }) {
	const [toggleLogo, setToggleLogo] = useState(false);
	const toggleSwitch = () => {
		changeTheme(!setTheme);
		setToggleLogo(!toggleLogo);
	};
	const history = useHistory();
	console.log(history.location.pathname);
	const Navbar = (
		<div className={classes.root}>
			<AppBar position="static" className={classes.navbar}>
				<Toolbar className={classes.container}>
					<Tooltip title="Zero of Maya Civilization">
						<Button
							color="inherit"
							className={classes.title}
							component={Link}
							to="/"
						>
							{toggleLogo ? (
								<img src={ZeroLight} alt="logo-zero" />
							) : (
								<img src={ZeroDark} alt="logo-zero" />
							)}
						</Button>
					</Tooltip>

					<div>
						<Switch onChange={toggleSwitch} />
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
	const routedNavbar = (
		<div className={classes.root}>
			<AppBar position="static" className={classes.navbar}>
				<Toolbar className={classes.container}>
					<Tooltip title="Zero of Maya Civilization">
						<Button
							color="inherit"
							className={classes.title}
							component={Link}
							to="/"
						>
							{toggleLogo ? (
								<img src={ZeroLight} alt="logo-zero" />
							) : (
								<img src={ZeroDark} alt="logo-zero" />
							)}
						</Button>
					</Tooltip>
					<Button
						color="inherit"
						component={Link}
						className={classes.navButton}
						to="/timeline"
					>
						Timeline
					</Button>
					<Button
						color="inherit"
						component={Link}
						className={classes.navButton}
						to="/heritage"
					>
						Heritage
					</Button>
					<Button
						color="inherit"
						component={Link}
						className={classes.navButton}
						to="/shop"
					>
						Shop
					</Button>

					<div>
						<Switch onChange={toggleSwitch} />
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
	const location = useLocation();
	return <div>{location.pathname === "/" ? Navbar : routedNavbar}</div>;
}

export default withStyles(styles)(Navbar);
