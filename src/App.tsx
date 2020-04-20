import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import List from './components/List';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<div className='page-content'>
				<List />
			</div>
		</div>
	);
}

export default App;
