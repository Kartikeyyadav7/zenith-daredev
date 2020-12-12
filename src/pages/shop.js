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
import { Link } from "react-router-dom";
import mayaCalender from "../assets/mayacalender.png";

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
						<Typography gutterBottom variant="h5" component="h2">
							Calender
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="medium" color="primary" style={{ marginTop: "-2rem" }}>
						$ 500
					</Button>
				</CardActions>
			</Card>
			<Card className={classes.root}>
				<CardActionArea>
					<img
						className={classes.media}
						src={mayaCalender}
						alt="mayacalender"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							Calender
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						$ 500
					</Button>

					<Button
						size="small"
						color="primary"
						component={Link}
						to="/"
						variant="contained"
					>
						Add To Cart
					</Button>
				</CardActions>
			</Card>
			<Card className={classes.root}>
				<CardActionArea>
					<img
						className={classes.media}
						src={mayaCalender}
						alt="mayacalender"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							Calender
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						$ 500
					</Button>

					<Button
						size="small"
						color="primary"
						component={Link}
						to="/"
						variant="contained"
					>
						Add To Cart
					</Button>
				</CardActions>
			</Card>
			<Card className={classes.root}>
				<CardActionArea>
					<img
						className={classes.media}
						src={mayaCalender}
						alt="mayacalender"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							Calender
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						$ 500
					</Button>

					<Button
						size="small"
						color="primary"
						component={Link}
						to="/"
						variant="contained"
					>
						Add To Cart
					</Button>
				</CardActions>
			</Card>
			<Card className={classes.root}>
				<CardActionArea>
					<img
						className={classes.media}
						src={mayaCalender}
						alt="mayacalender"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							Calender
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						$ 500
					</Button>

					<Button
						size="small"
						color="primary"
						component={Link}
						to="/"
						variant="contained"
					>
						Add To Cart
					</Button>
				</CardActions>
			</Card>
			<Card className={classes.root}>
				<CardActionArea>
					<img
						className={classes.media}
						src={mayaCalender}
						alt="mayacalender"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							Calender
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						$ 500
					</Button>

					<Button
						size="small"
						color="primary"
						component={Link}
						to="/"
						variant="contained"
					>
						Add To Cart
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default withStyles(styles)(HomeItems);
