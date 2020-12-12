import React from "react";
import styles from "../styles/Shop";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import mayaCalender from "../assets/mayacalender.png";
import mayacurrency from "../assets/mayacurrency.png";
import mayatoys from "../assets/mayatoys.png";
import mayawarwear from "../assets/mayawarwear.png";
import mayawomencloth from "../assets/mayawomencloth.png";
import mayaweapons from "../assets/mayaweapons.png";

const HomeItems = ({ classes }) => {
	return (
		<Grid
			container
			direction="row"
			justify="center"
			className={classes.itemGrid}
		>
			<Card className={classes.root}>
				<CardActionArea>
					<img
						className={classes.media}
						src={mayaCalender}
						alt="mayacalender"
					/>
					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="h2"
							style={{ marginLeft: "12rem" }}
						>
							Calender
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button
						size="medium"
						color="primary"
						style={{ marginLeft: "14rem", color: "black", marginTop: "-2rem" }}
					>
						$ 500
					</Button>
				</CardActions>
			</Card>
			<Card className={classes.root}>
				<CardActionArea>
					<img className={classes.media} src={mayatoys} alt="mayatoys" />
					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="h2"
							style={{ marginLeft: "15rem" }}
						>
							Toys
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button
						size="medium"
						style={{ marginLeft: "15rem", color: "black", marginTop: "-2rem" }}
						color="primary"
					>
						$ 500
					</Button>
				</CardActions>
			</Card>
			<Card className={classes.root}>
				<CardActionArea>
					<img
						className={classes.media}
						src={mayacurrency}
						alt="mayacurrency"
					/>
					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="h2"
							style={{ marginLeft: "12rem" }}
						>
							Currency
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button
						size="medium"
						style={{ marginLeft: "14rem", color: "black", marginTop: "-2rem" }}
						color="primary"
					>
						$ 500
					</Button>
				</CardActions>
			</Card>
			<Card className={classes.root}>
				<CardActionArea>
					<img className={classes.media} src={mayawarwear} alt="mayawarwear" />
					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="h2"
							style={{ marginLeft: "12rem" }}
						>
							War Wear
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button
						size="medium"
						style={{ marginLeft: "14rem", color: "black", marginTop: "-2rem" }}
						color="primary"
					>
						$ 500
					</Button>
				</CardActions>
			</Card>
			<Card className={classes.root}>
				<CardActionArea>
					<img
						className={classes.media}
						src={mayawomencloth}
						alt="maya women cloths"
					/>
					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="h2"
							style={{ marginLeft: "9rem" }}
						>
							Women cloths
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button
						size="medium"
						style={{ marginLeft: "12rem", color: "black", marginTop: "-2rem" }}
						color="primary"
					>
						$ 500
					</Button>
				</CardActions>
			</Card>
			<Card className={classes.root}>
				<CardActionArea>
					<img className={classes.media} src={mayaweapons} alt="maya weapons" />
					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="h2"
							style={{ marginLeft: "12rem" }}
						>
							Weapons
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button
						size="medium"
						style={{ marginLeft: "14rem", color: "black", marginTop: "-2rem" }}
						color="primary"
					>
						$ 500
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default withStyles(styles)(HomeItems);
