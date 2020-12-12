import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
	typography: {
		fontFamily: ["Nunito", "sans-serif"].join(","),
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Navbar />
				<div className="App">
					<Switch>
						<Route exact path="/" component={Home} />
					</Switch>
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
