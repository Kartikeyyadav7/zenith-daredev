const styles = (theme) => ({
	root: {
		maxWidth: 500,
		// width: "345px",
		marginRight: "1rem",
		marginTop: "1rem",
		background: `radial-gradient(99.72% 328.19% at 1.84% 6.26%, #FFFFFF 0%, rgba(255, 255, 255, 0) 102%, #FFFFFF 100%)`,
		filter: `drop-shadow(80px 42px 100px rgba(0, 0, 0, 0.1))`,
		backdropFilter: `blur(80px)`,
		borderRadius: ` 60px`,
	},
	itemName: {
		marginLeft: "12rem",
		[theme.breakpoints.down("xs")]: {
			marginLeft: "9rem",
		},
	},
	toys: {
		marginLeft: "15rem",
		[theme.breakpoints.down("xs")]: {
			marginLeft: "12rem",
		},
	},
	toyPrice: {
		marginLeft: "15rem",
		color: "black",
		marginTop: "-2rem",
		[theme.breakpoints.down("xs")]: {
			marginLeft: "12rem",
		},
	},
	itemPrice: {
		marginLeft: "14rem",
		color: "black",
		marginTop: "-2rem",
		[theme.breakpoints.down("xs")]: {
			marginLeft: "10rem",
		},
	},
	itemGrid: {
		display: "flex",
		maxWidth: "1100px",
		margin: "auto",
		flexWrap: "wrap",
		alignContent: "flexStart",
		marginBottom: "2rem",
	},
	mainText: {
		fontWeight: "900",
		margin: `1rem 0 1rem 3rem`,
		fontSize: "3.125rem",
		textShadow: theme.overrides.MuiButton.textShadow.textShadow,
	},
	media: {
		width: "100%",
		[theme.breakpoints.down("xs")]: {
			width: `100%`,
		},
		maxHeight: "100%",
	},
});

export default styles;
