import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.scss';
import Navbar from './components/Navbar';
import List from './components/List';
import NotesContextProvider from './contexts/NotesContext';
import AddNote from './components/AddNote';

function App() {
	const onAddNote = () => {
		// TODO
	};

	return (
		<div className='App'>
			<Navbar />
			<div className='page-content'>
				<NotesContextProvider>
					<Router>
						<Switch>
							<Route path='/add'>
								<AddNote submit={onAddNote} />
							</Route>
							<Route path='/'>
								<List />
							</Route>
						</Switch>
					</Router>
				</NotesContextProvider>
			</div>
		</div>
	);
}

export default App;
