import React, { Fragment, useState } from "react";
import styles from "../styles/Heritage";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import ReactCardFlip from "react-card-flip";
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
	const [isFlipped, setIsFlipped] = useState(false);
	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};
	return (
		<>
			<Typography variant="h4" className={classes.mainText}>
				CULTURE
			</Typography>
			<Grid
				container
				direction="row"
				justify="center"
				className={classes.itemGrid}
			>
				<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
					<div className={classes.front}>
						<Card className={classes.rootFront}>
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
										style={{ marginLeft: "7rem" }}
									>
										Culture
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button
									size="medium"
									color="primary"
									style={{
										marginLeft: "7.8rem",
										color: "black",
										marginTop: "-2rem",
									}}
									onClick={handleClick}
								>
									More
								</Button>
							</CardActions>
						</Card>
					</div>
					<div className={classes.back}>
						<Card className={classes.rootBack}>
							<CardActionArea>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Maya civilization is located in meso american region
										presently mexicothe Yucatan Peninsula and modern-day
										Guatemala; Belize and parts of the Mexican states of Tabasco
										and Chiapas and the western part of Honduras and El Salvador
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button
									size="medium"
									color="primary"
									style={{
										marginLeft: "14rem",
										color: "black",
										marginTop: "-2rem",
									}}
									onClick={handleClick}
								>
									Back
								</Button>
							</CardActions>
						</Card>
					</div>
				</ReactCardFlip>
				<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
					<div className={classes.front}>
						<Card className={classes.rootFront}>
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
										style={{ marginLeft: "7rem" }}
									>
										Culture
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button
									size="medium"
									color="primary"
									style={{
										marginLeft: "7.8rem",
										color: "black",
										marginTop: "-2rem",
									}}
									onClick={handleClick}
								>
									More
								</Button>
							</CardActions>
						</Card>
					</div>
					<div className={classes.back}>
						<Card className={classes.rootBack}>
							<CardActionArea>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Maya civilization is located in meso american region
										presently mexicothe Yucatan Peninsula and modern-day
										Guatemala; Belize and parts of the Mexican states of Tabasco
										and Chiapas and the western part of Honduras and El Salvador
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button
									size="medium"
									color="primary"
									style={{
										marginLeft: "14rem",
										color: "black",
										marginTop: "-2rem",
									}}
									onClick={handleClick}
								>
									Back
								</Button>
							</CardActions>
						</Card>
					</div>
				</ReactCardFlip>
				<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
					<div className={classes.front}>
						<Card className={classes.rootFront}>
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
										style={{ marginLeft: "7rem" }}
									>
										Culture
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button
									size="medium"
									color="primary"
									style={{
										marginLeft: "7.8rem",
										color: "black",
										marginTop: "-2rem",
									}}
									onClick={handleClick}
								>
									More
								</Button>
							</CardActions>
						</Card>
					</div>
					<div className={classes.back}>
						<Card className={classes.rootBack}>
							<CardActionArea>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Maya civilization is located in meso american region
										presently mexicothe Yucatan Peninsula and modern-day
										Guatemala; Belize and parts of the Mexican states of Tabasco
										and Chiapas and the western part of Honduras and El Salvador
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button
									size="medium"
									color="primary"
									style={{
										marginLeft: "14rem",
										color: "black",
										marginTop: "-2rem",
									}}
									onClick={handleClick}
								>
									Back
								</Button>
							</CardActions>
						</Card>
					</div>
				</ReactCardFlip>
				<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
					<div className={classes.front}>
						<Card className={classes.rootFront}>
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
										style={{ marginLeft: "7rem" }}
									>
										Culture
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button
									size="medium"
									color="primary"
									style={{
										marginLeft: "7.8rem",
										color: "black",
										marginTop: "-2rem",
									}}
									onClick={handleClick}
								>
									More
								</Button>
							</CardActions>
						</Card>
					</div>
					<div className={classes.back}>
						<Card className={classes.rootBack}>
							<CardActionArea>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Maya civilization is located in meso american region
										presently mexicothe Yucatan Peninsula and modern-day
										Guatemala; Belize and parts of the Mexican states of Tabasco
										and Chiapas and the western part of Honduras and El Salvador
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button
									size="medium"
									color="primary"
									style={{
										marginLeft: "14rem",
										color: "black",
										marginTop: "-2rem",
									}}
									onClick={handleClick}
								>
									Back
								</Button>
							</CardActions>
						</Card>
					</div>
				</ReactCardFlip>
				<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
					<div className={classes.front}>
						<Card className={classes.rootFront}>
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
										style={{ marginLeft: "7rem" }}
									>
										Culture
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button
									size="medium"
									color="primary"
									style={{
										marginLeft: "7.8rem",
										color: "black",
										marginTop: "-2rem",
									}}
									onClick={handleClick}
								>
									More
								</Button>
							</CardActions>
						</Card>
					</div>
					<div className={classes.back}>
						<Card className={classes.rootBack}>
							<CardActionArea>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Maya civilization is located in meso american region
										presently mexicothe Yucatan Peninsula and modern-day
										Guatemala; Belize and parts of the Mexican states of Tabasco
										and Chiapas and the western part of Honduras and El Salvador
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button
									size="medium"
									color="primary"
									style={{
										marginLeft: "14rem",
										color: "black",
										marginTop: "-2rem",
									}}
									onClick={handleClick}
								>
									Back
								</Button>
							</CardActions>
						</Card>
					</div>
				</ReactCardFlip>
				<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
					<div className={classes.front}>
						<Card className={classes.rootFront}>
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
										style={{ marginLeft: "7rem" }}
									>
										Culture
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button
									size="medium"
									color="primary"
									style={{
										marginLeft: "7.8rem",
										color: "black",
										marginTop: "-2rem",
									}}
									onClick={handleClick}
								>
									More
								</Button>
							</CardActions>
						</Card>
					</div>
					<div className={classes.back}>
						<Card className={classes.rootBack}>
							<CardActionArea>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Maya civilization is located in meso american region
										presently mexicothe Yucatan Peninsula and modern-day
										Guatemala; Belize and parts of the Mexican states of Tabasco
										and Chiapas and the western part of Honduras and El Salvador
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button
									size="medium"
									color="primary"
									style={{
										marginLeft: "14rem",
										color: "black",
										marginTop: "-2rem",
									}}
									onClick={handleClick}
								>
									Back
								</Button>
							</CardActions>
						</Card>
					</div>
				</ReactCardFlip>
			</Grid>
		</>
	);
};

export default withStyles(styles)(HomeItems);
