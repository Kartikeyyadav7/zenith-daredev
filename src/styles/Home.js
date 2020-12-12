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
		background: "#D69B79",
		boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)`,
		borderRadius: `120px`,
		color: "black",
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
		background: "#D79C7B",
		boxShadow: ` 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)`,
		borderRadius: `120px`,
		color: "black",
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
		background: "#DBAA94",
		boxShadow: ` 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)`,
		borderRadius: `120px`,
		color: "black",
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
