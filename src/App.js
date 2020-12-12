import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Router>
			<Navbar />
			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
