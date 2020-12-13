import {
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemText,
} from "@material-ui/core";
import styles from "../styles/SlideDrawer";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import { Menu } from "@material-ui/icons";
import * as React from "react";
import { useState } from "react";

const SideDrawer = ({ navLinks, classes }) => {
	const [state, setState] = useState({ right: false });

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ [anchor]: open });
	};

	const sideDrawerList = (anchor) => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List component="nav">
				{navLinks.map(({ title, path }) => (
					<Link to={path} key={title} className={classes.linkText}>
						<ListItem button>
							<ListItemText primary={title} />
						</ListItem>
					</Link>
				))}
			</List>
		</div>
	);

	return (
		<React.Fragment>
			<IconButton
				edge="start"
				aria-label="menu"
				onClick={toggleDrawer("right", true)}
			>
				<Menu fontSize="large" style={{ color: `white` }} />
			</IconButton>

			<Drawer
				classes={{ paper: classes.paper }}
				anchor="right"
				open={state.right}
				onOpen={toggleDrawer("right", true)}
				onClose={toggleDrawer("right", false)}
			>
				{sideDrawerList("right")}
			</Drawer>
		</React.Fragment>
	);
};

export default withStyles(styles)(SideDrawer);
