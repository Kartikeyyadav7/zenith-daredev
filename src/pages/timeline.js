import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import styles from "../styles/Timeline";
import withStyles from "@material-ui/core/styles/withStyles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";
import timeline1 from "../assets/timeline1.png";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import timeline2 from "../assets/timeline2.png";
import timeline3 from "../assets/timeline3.png";
import timeline4 from "../assets/timeline4.png";
import timeline5 from "../assets/timeline5.png";
import timeline6 from "../assets/timeline6.png";
import Fade from "react-reveal/Fade";

const TimelineComp = ({ classes }) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("sm"));

	const Timeline1 = (
		<React.Fragment>
			<Typography className={classes.mainText}>TIMELINE</Typography>
			<Timeline align="alternate">
				<TimelineItem>
					<TimelineOppositeContent>
						<Fade bottom>
							<Card className={classes.root}>
								<CardActionArea>
									<img
										className={classes.media}
										src={timeline1}
										alt="olmec men"
									/>
								</CardActionArea>
							</Card>
						</Fade>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<Fade top>
							<Typography>
								<Typography variant="h5">1200-900 BC</Typography>
								The rise of the Olmec civilization, from which many aspects of
								Maya culture are derived.
							</Typography>
						</Fade>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent>
						<Fade bottom>
							<Card className={classes.root}>
								<CardActionArea>
									<img
										className={classes.media}
										src={timeline2}
										alt="numbering"
									/>
								</CardActionArea>
							</Card>
						</Fade>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<Typography>
							<Fade top>
								<Typography>
									<Typography variant="h5">900-300 B.C.</Typography>
									Writing is developed in Mesoamerica. The earliest known solar
									calendars carved in stone are in use among the Maya. we were
									one of the first civilization to use our own calendar and have
									our own numbering system
								</Typography>
							</Fade>
						</Typography>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent>
						<Fade bottom>
							<Card className={classes.root}>
								<CardActionArea>
									<img
										className={classes.media}
										src={timeline3}
										alt="calendarr"
									/>
								</CardActionArea>
							</Card>
						</Fade>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<Fade top>
							<Typography>
								<Typography variant="h5">A.D. 250-600</Typography>
								The Maya city of Tikal becomes the first great Maya city, as
								citizens from Teotihuacan make their way to Tikal, introducing
								new ideas involving weaponry. And here we were very much rich
								and gifted with all weaponary technologies.
							</Typography>
						</Fade>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent>
						<Fade bottom>
							<Card className={classes.root}>
								<CardActionArea>
									<img
										className={classes.media}
										src={timeline4}
										alt="timeline4"
									/>
								</CardActionArea>
							</Card>
						</Fade>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<Fade top>
							<Typography>
								<Typography variant="h5">A.D. 900-1500</Typography>
								Maya cities in the northern Yucatán continue to thrive.Culture
								and sports enriched we are the one to introduced the vulcanized
								rubber ball to play most ancient and amazing gamne come here and
								have a look to the amazing game.
							</Typography>
						</Fade>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent>
						<Fade bottom>
							<Card className={classes.root}>
								<CardActionArea>
									<img
										className={classes.media}
										src={timeline5}
										alt="spanish ruler"
									/>
								</CardActionArea>
							</Card>
						</Fade>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<Fade top>
							<Typography>
								<Typography variant="h5">A.D. 1500-1800</Typography>
								Mayan colonised by spanish and culture came to decline and here
								begins our decline of civilization
							</Typography>
						</Fade>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent>
						<Fade bottom>
							<Card className={classes.root}>
								<CardActionArea>
									<img
										className={classes.media}
										src={timeline6}
										alt="scenery of mayan"
									/>
								</CardActionArea>
							</Card>
						</Fade>
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<Fade top>
							<Typography>
								<Typography variant="h5">An appeal</Typography>
								Lets revive the most rich culture and raise the kingdom of
								civilization visit our civilization and be the part of legacy
							</Typography>
						</Fade>
					</TimelineContent>
				</TimelineItem>
			</Timeline>
		</React.Fragment>
	);
	const TimelineMob = (
		<Grid
			container
			direction="row"
			justify="center"
			className={classes.itemGrid}
			spacing={6}
		>
			<Card className={classes.root}>
				<CardActionArea>
					<Fade bottom>
						<img className={classes.media} src={timeline1} alt="mayacalender" />
					</Fade>
				</CardActionArea>
			</Card>

			<Card className={classes.typ}>
				<Fade bottom>
					<Typography>
						<Typography variant="h5">1200-900 BC</Typography>
						The rise of the Olmec civilization, from which many aspects of Maya
						culture are derived.
					</Typography>
				</Fade>
			</Card>

			<Fade bottom>
				<Card className={classes.root}>
					<CardActionArea>
						<img className={classes.media} src={timeline2} alt="mayacalender" />
					</CardActionArea>
				</Card>
			</Fade>

			<Card className={classes.typ}>
				<Typography>
					<Fade bottom>
						<Typography>
							<Typography variant="h5">900-300 B.C.</Typography>
							Writing is developed in Mesoamerica. The earliest known solar
							calendars carved in stone are in use among the Maya. we were one
							of the first civilization to use our own calendar and have our own
							numbering system
						</Typography>
					</Fade>
				</Typography>
			</Card>

			<Fade bottom>
				<Card className={classes.root}>
					<CardActionArea>
						<img className={classes.media} src={timeline3} alt="mayacalender" />
					</CardActionArea>
				</Card>
			</Fade>

			<Card className={classes.typ}>
				<Fade bottom>
					<Typography>
						<Typography variant="h5">A.D. 250-600</Typography>
						The Maya city of Tikal becomes the first great Maya city, as
						citizens from Teotihuacan make their way to Tikal, introducing new
						ideas involving weaponry. And here we were very much rich and gifted
						with all weaponary technologies.
					</Typography>
				</Fade>
			</Card>

			<Fade bottom>
				<Card className={classes.root}>
					<CardActionArea>
						<img className={classes.media} src={timeline4} alt="mayacalender" />
					</CardActionArea>
				</Card>
			</Fade>

			<Card className={classes.typ}>
				<Fade bottom>
					<Typography>
						<Typography variant="h5">A.D. 900-1500</Typography>
						Maya cities in the northern Yucatán continue to thrive.Culture and
						sports enriched we are the one to introduced the vulcanized rubber
						ball to play most ancient and amazing gamne come here and have a
						look to the amazing game.
					</Typography>
				</Fade>
			</Card>

			<Fade bottom>
				<Card className={classes.root}>
					<CardActionArea>
						<img className={classes.media} src={timeline5} alt="mayacalender" />
					</CardActionArea>
				</Card>
			</Fade>

			<Card className={classes.typ}>
				<Fade bottom>
					<Typography>
						<Typography variant="h5">A.D. 1500-1800</Typography>
						Mayan colonised by spanish and culture came to decline and here
						begins our decline of civilization
					</Typography>
				</Fade>
			</Card>

			<Card className={classes.root}>
				<CardActionArea>
					<Fade bottom>
						<img className={classes.media} src={timeline6} alt="mayacalender" />
					</Fade>
				</CardActionArea>
			</Card>

			<Card className={classes.typ}>
				<Fade bottom>
					<Typography>
						<Typography variant="h5">An appeal</Typography>
						Lets revive the most rich culture and raise the kingdom of
						civilization visit our civilization and be the part of legacy
					</Typography>
				</Fade>
			</Card>
		</Grid>
	);

	return <div>{matches ? Timeline1 : TimelineMob}</div>;
};

export default withStyles(styles)(TimelineComp);
