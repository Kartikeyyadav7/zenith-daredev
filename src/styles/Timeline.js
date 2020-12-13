const styles = (theme) => ({
	root: {
		maxWidth: 500,
        width: "445px",
        height:"300px",
		marginRight: "1rem",
		marginTop: "1rem",
		background: `radial-gradient(99.72% 328.19% at 1.84% 6.26%, #FFFFFF 0%, rgba(255, 255, 255, 0) 102%, #FFFFFF 100%)`,
		filter: `drop-shadow(80px 42px 100px rgba(0, 0, 0, 0.1))`,
		backdropFilter: `blur(80px)`,
		borderRadius: ` 60px`,
    },
    typ:{
        background: "transparent",
        boxShadow: "none",
        maxWidth: 1000,
		width: "545px",
		marginRight: "1rem",
		marginTop: "1rem"
    },
	itemGrid: {
		display: "flex",
        maxWidth: "1100px",
		margin: "auto",
		flexWrap: "wrap",
		alignContent: "flexStart",
	},
	media: {
        width: "445px",
        height: "400px",
        left: "292px",
        top: "590px",
        mixBlendMode: "darken",
		[theme.breakpoints.down("xs")]: {
			width: "17rem",
		},
        maxHeight: "240px",
        align:"center"
    },
    mainText: {
		fontWeight: "900",
		fontSize: "3.125rem",
		textShadow: theme.overrides.MuiButton.textShadow.textShadow,
	}
});

export default styles;
