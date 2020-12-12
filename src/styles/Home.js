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
});
export default styles;
