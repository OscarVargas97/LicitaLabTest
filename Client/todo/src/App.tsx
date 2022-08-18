import React from 'react';
import './App.css';
import CharCounter from "./Components/common/CharCounter";
import Layout from "./Components/layout/Layout";

const query = [['character', "c"], ['location', "l"], ['episode', "e"]]


function App() {
	return (
		<Layout>
			{query.map(q => {
				let [apiQuery, charFind] = q
				return <CharCounter key={charFind} charFind={charFind} apiQuery={apiQuery}></CharCounter>
			})}
		</Layout>
	);
}

export default App;
