import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Timeline1 from "./pages/timeline";
import Navbar from "./components/Navbar";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
	const [changeTheme, setChangeTheme] = useState(false);

	const darkTheme = createMuiTheme({
		palette: {
			type: "dark",
		},
		overrides: {
			MuiButton: {
				button: {
					color: "white",
				},
				buttonColor: {
					background: `#3F3834`,
					boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)`,
				},
				buttonCulture: {
					background: `#5E524D`,
					boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)`,
				},
				buttonShop: {
					background: `#6F5F5A`,
					boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)`,
				},
				textShadow: {
					textShadow: `2px 2px black`,
				},
			},
			MuiCssBaseline: {
				"@global": {
					body: {
						background: `radial-gradient(93.37% 320.48% at 98.88% 2.61%, #3C3630 0%, #958079 49.64%, #24211F 100%)`,
					},
				},
			},
		},
		typography: {
			fontFamily: ["Nunito", "sans-serif"].join(","),
		},
	});
	const lightTheme = createMuiTheme({
		overrides: {
			MuiButton: {
				button: {
					color: "black",
				},
				buttonColor: {
					background: `#D69B79`,
					boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)`,
				},
				buttonCulture: {
					background: "#D79C7B",
					boxShadow: ` 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)`,
				},
				buttonShop: {
					background: "#DBAA94",
					boxShadow: ` 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)`,
				},
				textShadow: {
					textShadow: `2px 2px white`,
				},
			},
			MuiCssBaseline: {
				"@global": {
					body: {
						background: `radial-gradient(
              93.37% 320.48% at 98.88% 2.61%,
              #b68b72 0%,
              #deb6a7 49.64%,
              #ce7c46 100%
            )`,
					},
				},
			},
		},

		typography: {
			fontFamily: ["Nunito", "sans-serif"].join(","),
		},
	});
	return (
		<ThemeProvider theme={changeTheme ? darkTheme : lightTheme}>
			<CssBaseline />
			<Router>
				<Navbar changeTheme={setChangeTheme} setTheme={changeTheme} />
				<div className="App">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/shop" component={Shop} />
						<Route exact path="/timeline" component={Timeline1} />
					</Switch>
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
