import React from "react";
import styles from "../styles/Timeline";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//import { Link } from "react-router-dom";

import timeline1 from "../assets/timeline1.png";
import timeline2 from "../assets/timeline2.png";
import timeline3 from "../assets/timeline3.png";
import timeline4 from "../assets/timeline4.png";
import timeline5 from "../assets/timeline5.png";
import timeline6 from "../assets/timeline6.png";

function TimelineMob({ classes }) {
	return (
<Grid
			container
			direction="row"
			justify="center"
			className={classes.itemGrid}
			spacing={6}
		>
			<Card className={classes.root}>
				<CardActionArea>
					<img
						className={classes.media}
						src={timeline1}
						alt="mayacalender"
					/>
				
				</CardActionArea>
				
			</Card>
            <Card className= {classes.typ}>
			<Typography>
                <Typography variant="h5">
                 1200-900 BC
                </Typography>
                The rise of the Olmec civilization, from which many aspects of Maya culture are derived.
            </Typography>
            </Card>
           
            <Card className={classes.root}>
				<CardActionArea>
					<img
						className={classes.media}
						src={timeline2}
						alt="mayacalender"
					/>
				
				</CardActionArea>
				
			</Card>
            <Card className= {classes.typ}>
            <Typography><Typography>
                <Typography variant="h5">
                900-300 B.C.
                </Typography>
                Writing is developed in Mesoamerica.
The earliest known solar calendars carved in stone are in use among the Maya.
we were one of the first civilization to use our own calendar and have our own numbering system 
            </Typography></Typography>
            </Card>
            <Card className={classes.root}>
				<CardActionArea>
					<img
						className={classes.media}
						src={timeline3}
						alt="mayacalender"
					/>
				
				</CardActionArea>
				
			</Card>
            <Card className= {classes.typ}>
            <Typography><Typography variant="h5">
            A.D. 250-600
                </Typography>
                The Maya city of Tikal becomes the first great Maya city, as citizens from Teotihuacan make their way to Tikal, introducing new ideas involving weaponry.
                And here we were very much rich and gifted with all weaponary technologies.
            </Typography>
            </Card>
            <Card className={classes.root}>
				<CardActionArea>
					<img
						className={classes.media}
						src={timeline4}
						alt="mayacalender"
					/>
				
				</CardActionArea>
				
			</Card>
            <Card className= {classes.typ}>
			<Typography><Typography variant="h5">
          A.D. 900-1500
                </Typography>
                Maya cities in the northern Yucatán continue to thrive.Culture and sports enriched we are the one to introduced the vulcanized rubber 
                ball to play most ancient and amazing gamne come here and have a look to the amazing game.
            </Typography>
            </Card>
            <Card className={classes.root}>
				<CardActionArea>
					<img
						className={classes.media}
						src={timeline5}
						alt="mayacalender"
					/>
				
				</CardActionArea>
				
			</Card>
            <Card className= {classes.typ}>
            <Typography><Typography variant="h5">
          A.D. 1500-1800
                </Typography>
                Mayan colonised by spanish and culture came to decline and here begins our decline of civilization
            </Typography>
            </Card>
            <Card className={classes.root}>
				<CardActionArea>
					<img
						className={classes.media}
						src={timeline6}
						alt="mayacalender"
					/>
				
				</CardActionArea>
				
			</Card>
            <Card className= {classes.typ}>
            <Typography><Typography variant="h5">
                An appeal
                </Typography>
                Lets revive the most rich culture and raise the kingdom of civilization
                 visit our civilization and be the part of legacy 
            </Typography>
            </Card>
           
		</Grid>
        
    );
    }
    export default withStyles(styles)(TimelineMob);