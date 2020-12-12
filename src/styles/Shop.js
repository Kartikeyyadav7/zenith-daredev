const styles = (theme) => ({
	root: {
		maxWidth: 500,
		width: "345px",
		marginRight: "1rem",
		marginTop: "1rem",
		background: `radial-gradient(99.72% 328.19% at 1.84% 6.26%, #FFFFFF 0%, rgba(255, 255, 255, 0) 102%, #FFFFFF 100%)`,
		filter: `drop-shadow(80px 42px 100px rgba(0, 0, 0, 0.1))`,
		backdropFilter: `blur(80px)`,
		borderRadius: ` 60px`,
	},
	itemGrid: {
		display: "flex",
		maxWidth: "1100px",
		margin: "auto",
		flexWrap: "wrap",
		alignContent: "flexStart",
		marginBottom: "2rem",
	},
	media: {
		width: "345px",
		[theme.breakpoints.down("xs")]: {
			width: "17rem",
		},
		maxHeight: "240px",
	},
});

export default styles;
