import React, { Fragment } from "react";
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
import Fade from "react-reveal/Fade";
import paintings from "../assets/mayanpainting.png";
import sculpture from "../assets/mayansculpture.png";
import jewelery from "../assets/mayanjewellary.png";

const HomeItems = ({ classes }) => {
	return (
		<>
			<Typography variant="h4" className={classes.mainText}>
				SHOP
			</Typography>
			<Grid
				container
				direction="row"
				justify="center"
				className={classes.itemGrid}
			>
				<Fade left>
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
									className={classes.itemName}
								>
									Calender
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button
								size="medium"
								color="primary"
								className={classes.itemPrice}
							>
								$ 500
							</Button>
						</CardActions>
					</Card>
				</Fade>
				<Fade top>
					<Card className={classes.root}>
						<CardActionArea>
							<img className={classes.media} src={mayatoys} alt="mayatoys" />
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="h2"
									className={classes.toys}
								>
									Toys
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button
								size="medium"
								className={classes.toyPrice}
								color="primary"
							>
								$ 500
							</Button>
						</CardActions>
					</Card>
				</Fade>
				<Fade right>
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
									className={classes.itemName}
								>
									Currency
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button
								size="medium"
								className={classes.itemPrice}
								color="primary"
							>
								$ 500
							</Button>
						</CardActions>
					</Card>
				</Fade>
				<Fade left>
					<Card className={classes.root}>
						<CardActionArea>
							<img
								className={classes.media}
								src={mayawarwear}
								alt="mayawarwear"
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="h2"
									className={classes.itemName}
								>
									Armour
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button
								size="medium"
								className={classes.itemPrice}
								color="primary"
							>
								$ 500
							</Button>
						</CardActions>
					</Card>
				</Fade>
				<Fade bottom>
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
									className={classes.itemName}
								>
									Clothes
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button
								size="medium"
								className={classes.itemPrice}
								color="primary"
							>
								$ 500
							</Button>
						</CardActions>
					</Card>
				</Fade>
				<Fade right>
					<Card className={classes.root}>
						<CardActionArea>
							<img
								className={classes.media}
								src={mayaweapons}
								alt="maya weapons"
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="h2"
									className={classes.itemName}
								>
									Weapons
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button
								size="medium"
								className={classes.itemPrice}
								color="primary"
							>
								$ 489
							</Button>
						</CardActions>
					</Card>
				</Fade>
				<Fade left>
					<Card className={classes.root}>
						<CardActionArea>
							<img
								className={classes.media}
								src={paintings}
								alt="mayawarwear"
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="h2"
									className={classes.itemName}
								>
									painting
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button
								size="medium"
								className={classes.itemPrice}
								color="primary"
							>
								$ 799
							</Button>
						</CardActions>
					</Card>
				</Fade>
				<Fade bottom>
					<Card className={classes.root}>
						<CardActionArea>
							<img
								className={classes.media}
								src={sculpture}
								alt="maya sculpture"
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="h2"
									className={classes.itemName}
								>
									Sculptures
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button
								size="medium"
								className={classes.itemPrice}
								color="primary"
							>
								$ 5000
							</Button>
						</CardActions>
					</Card>
				</Fade>
				<Fade right>
					<Card className={classes.root}>
						<CardActionArea>
							<img
								className={classes.media}
								src={jewelery}
								alt="maya jewelery"
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="h2"
									className={classes.itemName}
								>
									Jewelery
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button
								size="medium"
								className={classes.itemPrice}
								color="primary"
							>
								$ 2000
							</Button>
						</CardActions>
					</Card>
				</Fade>
			</Grid>
		</>
	);
};

export default withStyles(styles)(HomeItems);
