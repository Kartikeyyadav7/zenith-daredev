const styles = (theme) => ({
	textItem: {
		marginBottom: `2rem`,
		[theme.breakpoints.down("xs")]: {
			maxWidth: `100%`,
		},
	},
	mainGrid: {
		margin: "2.5rem auto auto auto",
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column",
		},
	},
	mainText: {
		fontWeight: "900",
		fontSize: "3.125rem",
		textShadow: theme.overrides.MuiButton.textShadow.textShadow,
	},
	title: {
		fontFamily: "Nunito",
		marginBottom: `10rem`,
		[theme.breakpoints.down("xs")]: {
			width: `100%`,
		},
	},
	img: {
		[theme.breakpoints.down("xs")]: {
			maxWidth: `100%`,
		},
	},
	image: {
		width: "100%",
		paddingBottom: `2rem`,
	},
	button: {
		background: theme.overrides.MuiButton.buttonColor.background,
		boxShadow: theme.overrides.MuiButton.buttonColor.boxShadow,
		borderRadius: `120px`,
		color: theme.overrides.MuiButton.button.color,
		marginBottom: "4rem",
		marginRight: "1.5rem",
		"&:active": {
			transform: `translateY(4px)`,
		},
		"&:hover": {
			background: "#D69B79",
		},
		fontWeight: "900",
	},

	buttonCulture: {
		background: theme.overrides.MuiButton.buttonCulture.background,
		boxShadow: theme.overrides.MuiButton.buttonCulture.boxShadow,
		borderRadius: `120px`,
		color: theme.overrides.MuiButton.button.color,
		marginBottom: "4rem",
		marginRight: "1.5rem",
		"&:active": {
			transform: `translateY(4px)`,
		},
		"&:hover": {
			background: "#D79C7B",
		},
		fontWeight: "900",
	},
	buttonShop: {
		background: theme.overrides.MuiButton.buttonShop.background,
		boxShadow: theme.overrides.MuiButton.buttonShop.boxShadow,
		borderRadius: `120px`,
		color: theme.overrides.MuiButton.button.color,
		marginBottom: "4rem",
		"&:active": {
			transform: `translateY(4px)`,
		},
		"&:hover": {
			background: "#DBAA94",
		},
		fontWeight: "900",
	},
});
export default styles;
