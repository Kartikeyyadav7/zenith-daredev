const styles = (theme) => ({
	list: {
		width: 250,
	},
	linkText: {
		textDecoration: `none`,
		textTransform: `uppercase`,
		color: theme.overrides.MuiButton.button.color,
	},
	paper: {
		background: theme.overrides.MuiButton.backgroundSlider.background,
	},
});

export default styles;
