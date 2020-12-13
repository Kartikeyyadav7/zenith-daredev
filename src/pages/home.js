import React from "react";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../styles/Home";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import mayan from "../assets/mayanpeople.png";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

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
					<Zoom>
						<Typography variant="h4" className={classes.mainText}>
							MAYA CIVILIZATION
						</Typography>

						<Typography variant="h5" className={classes.titleSub}>
							A Mayan to write the whole impactful history of the world and one
							of the most promising civilization in the world welcomes you{" "}
						</Typography>
					</Zoom>
				</div>
				<Fade left>
					<div>
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
					</div>
				</Fade>
			</Grid>

			<Grid item xs={6} className={classes.img}>
				<Fade right>
					<img src={mayan} className={classes.image} alt="Mayanpeople" />
				</Fade>
			</Grid>
		</Grid>
	);
}

export default withStyles(styles)(Home);
