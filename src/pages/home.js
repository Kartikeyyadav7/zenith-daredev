import React from "react";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../styles/Home";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import mayan from "../assets/mayanpeople.png";

function Home({ classes }) {
	return (
		<Grid
			container
			direction="row"
			justify="center"
			alignItems="center"
			className={classes.mainGrid}
		>
			<Grid item xs={6} className={classes.textItem}>
				<div className={classes.title}>
					<Typography variant="h4" className={classes.mainText}>
						MAYA CIVILIZATION
					</Typography>
					<Typography variant="h5" className={classes.titleSub}>
						A Mayan to write the whole impactful history of the world and one of
						the most promising civilization in the world welcomes you{" "}
					</Typography>
				</div>
				<Button
					variant="contained"
					color="primary"
					component={Link}
					to="/timeline"
					className={classes.button}
				>
					Timeline
				</Button>
				<Button
					variant="contained"
					color="primary"
					component={Link}
					to="/heritage"
					className={classes.buttonCulture}
				>
					Heritage
				</Button>
				<Button
					variant="contained"
					color="primary"
					component={Link}
					to="/shop"
					className={classes.buttonShop}
				>
					Shop
				</Button>
			</Grid>
			<Grid item xs={6} className={classes.img}>
				<img src={mayan} className={classes.image} alt="Mayanpeople" />
			</Grid>
		</Grid>
	);
}

export default withStyles(styles)(Home);
