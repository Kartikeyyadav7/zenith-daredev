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
										The Maya calendar is a system of three interlacing calendars
										and almanacs which was used by several cultures in Central
										America, most famously the Maya civilization.
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
										The most famous of all Mayan sports was, of course, the
										Mayan ball game which had a ritualistic status and large
										ball courts were built specifically for this game. games
										such as Tlachtli, Jai Alai, and board games like Bul and
										Patolli.
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
										Grow crops such as corn (maize), beans, squash and cassava
										(manioc). lasted until about 300 B.C., Maya farmers began to
										expand their presence both in the highland and lowland
										regions.
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
										The clothing worn by the Maya depended on the region they
										lived in and their social status. They wore colorful
										clothing made from animal skins. They also wore feather
										headdresses and fancy jewelry.
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
										With between 166 and 250 named gods, the Mayans had a
										complex and changeable pantheon. They had gods to oversee
										every human action and aspect of life gods for birth and
										death, for the ball game and gambling etc.
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
