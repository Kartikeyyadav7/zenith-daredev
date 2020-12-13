const styles = (theme) => ({
	root: {
		maxWidth: 500,
		width: "345px",
		marginRight: "1rem",
		marginTop: "1rem",
		[theme.breakpoints.down("xs")]: {
			width: "17rem",
		}
	},
	rootFront: {
		maxWidth: 500,
		width: `100%`,
		marginRight: "1rem",
		marginTop: "1rem",
		background: `radial-gradient(99.72% 328.19% at 1.84% 6.26%, #D9B1A1 0%, #DCB4A5 59.9%, rgba(255, 255, 255, 0) 100%)`,
		filter: `drop-shadow(80px 42px 100px rgba(0, 0, 0, 0.1))`,
		borderRadius: `60px`,
	},
	rootBack: {
		maxWidth: 500,
		width: `100%`,
		marginRight: "1rem",
		marginTop: "1rem",
		background: `radial-gradient(99.72% 328.19% at 1.84% 6.26%, #FFFFFF 0%, rgba(255, 255, 255, 0) 102%, #FFFFFF 100%)`,
		filter: `drop-shadow(80px 42px 100px rgba(0, 0, 0, 0.1))`,
		backdropFilter: `blur(80px)`,

		borderRadius: `60px`,
	},
	flip: {
		margin: "1rem 2rem 2rem 0",
		[theme.breakpoints.down("xs")]: {
			margin: "0",
		},
	},
	flip2: {
		margin: "1rem 0 2rem 2rem",
		[theme.breakpoints.down("xs")]: {
			margin: "0",
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
		margin: "1rem 0 1rem 3rem",
		fontSize: "3.125rem",
		textShadow: theme.overrides.MuiButton.textShadow.textShadow,
		[theme.breakpoints.down("xs")]: {
			fontSize: "3rem",
			marginLeft: `-0.5`,
		},
	},
	media: {
		width: "345px",
		[theme.breakpoints.down("xs")]: {
			width: `100%`,
		},
		maxHeight: "240px",
	},
});

export default styles;
