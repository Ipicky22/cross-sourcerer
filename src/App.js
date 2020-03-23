import React from "react";
import "./App.css";

import Header from "./platform/common/header";
import Repositories from "./platform/common/repositories";

function App() {
	return (
		<div className="App-header">
			<Header />
			<Repositories />
		</div>
	);
}

export default App;
