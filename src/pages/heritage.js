import React, { Fragment } from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import styles from "../styles/Heritage";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import mayaCalender from "../assets/mayacalender.png";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import culture from "../assets/mayanculture.png";
import faith from "../assets/mayanfaith.png";
import sports from "../assets/mayansports.png";
import clothing from "../assets/mayanclothing.png";
import agriculture from "../assets/mayanagriculture.png";
import Fade from "react-reveal/Fade";

const HomeItems = ({ classes }) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("sm"));
	const initialRender = (
		<>
			<Typography variant="h4" className={classes.mainText}>
				HERITAGE
			</Typography>
			<Grid
				container
				direction="row"
				justify="center"
				className={classes.itemGrid}
			>
				<Flippy
					flipOnHover={true}
					flipDirection="horizontal"
					className={classes.flip}
				>
					<FrontSide>
						<Fade left>
							<Card className={classes.rootFront}>
								<CardActionArea>
									<img className={classes.media} src={culture} alt="culture" />
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
							</Card>
						</Fade>
					</FrontSide>
					<BackSide>
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
						</Card>
					</BackSide>
				</Flippy>
				<Flippy
					flipOnHover={true}
					flipDirection="horizontal"
					className={classes.flip2}
				>
					<FrontSide>
						<Fade right>
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
											Calendar
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Fade>
					</FrontSide>
					<BackSide>
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
						</Card>
					</BackSide>
				</Flippy>
				<Flippy
					flipOnHover={true}
					flipDirection="horizontal"
					className={classes.flip}
				>
					<FrontSide>
						<Fade left>
							<Card className={classes.rootFront}>
								<CardActionArea>
									<img
										className={classes.media}
										src={sports}
										alt="maya sports"
									/>
									<CardContent>
										<Typography
											gutterBottom
											variant="h5"
											component="h2"
											style={{ marginLeft: "7rem" }}
										>
											Sports
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Fade>
					</FrontSide>
					<BackSide>
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
						</Card>
					</BackSide>
				</Flippy>
				<Flippy
					flipOnHover={true}
					flipDirection="horizontal"
					className={classes.flip2}
				>
					<FrontSide>
						<Fade right>
							<Card className={classes.rootFront}>
								<CardActionArea>
									<img
										className={classes.media}
										src={agriculture}
										alt="agriculture"
									/>
									<CardContent>
										<Typography
											gutterBottom
											variant="h5"
											component="h2"
											style={{ marginLeft: "7rem" }}
										>
											Agriculture
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Fade>
					</FrontSide>
					<BackSide>
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
						</Card>
					</BackSide>
				</Flippy>
				<Flippy
					flipOnHover={true}
					flipDirection="horizontal"
					className={classes.flip}
				>
					<FrontSide>
						<Fade left>
							<Card className={classes.rootFront}>
								<CardActionArea>
									<img
										className={classes.media}
										src={clothing}
										alt="clothing"
									/>
									<CardContent>
										<Typography
											gutterBottom
											variant="h5"
											component="h2"
											style={{ marginLeft: "7rem" }}
										>
											Clothing
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Fade>
					</FrontSide>
					<BackSide>
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
						</Card>
					</BackSide>
				</Flippy>
				<Flippy
					flipOnHover={true}
					flipDirection="horizontal"
					className={classes.flip2}
				>
					<FrontSide>
						<Fade right>
							<Card className={classes.rootFront}>
								<CardActionArea>
									<img className={classes.media} src={faith} alt="faith" />
									<CardContent>
										<Typography
											gutterBottom
											variant="h5"
											component="h2"
											style={{ marginLeft: "7rem" }}
										>
											Religion
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Fade>
					</FrontSide>

					<BackSide>
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
						</Card>
					</BackSide>
				</Flippy>
			</Grid>
		</>
	);

	const smallScreenRender = (
		<>
			<Typography variant="h4" className={classes.mainText}>
				HERITAGE
			</Typography>
			<Grid
				container
				direction="row"
				justify="center"
				className={classes.itemGrid}
			>
				<Fade left>
					<Card className={classes.rootFront}>
						<CardActionArea>
							<img className={classes.media} src={culture} alt="culture" />
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
					</Card>
				</Fade>

				<Card className={classes.typ}>
					<CardActionArea>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								Maya civilization is located in meso american region presently
								mexicothe Yucatan Peninsula and modern-day Guatemala; Belize and
								parts of the Mexican states of Tabasco and Chiapas and the
								western part of Honduras and El Salvador
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>

				<Fade right>
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
									Calendar
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Fade>

				<Card className={classes.typ}>
					<CardActionArea>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								The Maya calendar is a system of three interlacing calendars and
								almanacs which was used by several cultures in Central America,
								most famously the Maya civilization.
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>

				<Fade left>
					<Card className={classes.rootFront}>
						<CardActionArea>
							<img className={classes.media} src={sports} alt="maya sports" />
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="h2"
									style={{ marginLeft: "7rem" }}
								>
									Sports
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Fade>

				<Card className={classes.typ}>
					<CardActionArea>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								The most famous of all Mayan sports was, of course, the Mayan
								ball game which had a ritualistic status and large ball courts
								were built specifically for this game. games such as Tlachtli,
								Jai Alai, and board games like Bul and Patolli.
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>

				<Fade right>
					<Card className={classes.rootFront}>
						<CardActionArea>
							<img
								className={classes.media}
								src={agriculture}
								alt="agriculture"
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="h2"
									style={{ marginLeft: "7rem" }}
								>
									Agriculture
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Fade>

				<Card className={classes.typ}>
					<CardActionArea>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								Grow crops such as corn (maize), beans, squash and cassava
								(manioc). lasted until about 300 B.C., Maya farmers began to
								expand their presence both in the highland and lowland regions.
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>

				<Fade left>
					<Card className={classes.rootFront}>
						<CardActionArea>
							<img className={classes.media} src={clothing} alt="clothing" />
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="h2"
									style={{ marginLeft: "7rem" }}
								>
									Clothing
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Fade>

				<Card className={classes.typ}>
					<CardActionArea>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								The clothing worn by the Maya depended on the region they lived
								in and their social status. They wore colorful clothing made
								from animal skins. They also wore feather headdresses and fancy
								jewelry.
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>

				<Fade right>
					<Card className={classes.rootFront}>
						<CardActionArea>
							<img className={classes.media} src={faith} alt="faith" />
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="h2"
									style={{ marginLeft: "7rem" }}
								>
									Religion
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Fade>

				<Card className={classes.typ}>
					<CardActionArea>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								With between 166 and 250 named gods, the Mayans had a complex
								and changeable pantheon. They had gods to oversee every human
								action and aspect of life gods for birth and death, for the ball
								game and gambling etc.
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Grid>
		</>
	);
	return <div>{matches ? initialRender : smallScreenRender}</div>;
};

export default withStyles(styles)(HomeItems);
