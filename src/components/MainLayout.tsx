import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NotesContext } from '../contexts/NotesContext';
import AddNote from './AddNote';
import List from './List';

export default function MainLayout() {
	let { addNote } = useContext(NotesContext);

	return (
		<div>
			<Router>
				<Switch>
					<Route path='/add'>
						<AddNote submit={addNote!} />
					</Route>
					<Route path='/'>
						<List />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}
