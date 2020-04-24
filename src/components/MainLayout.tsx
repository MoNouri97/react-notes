import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddNote from './AddNote';
import List from './List';
import EditNote from './EditNote';

export default function MainLayout() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path='/add'>
						<AddNote />
					</Route>
					<Route path='/note/:id'>
						<EditNote />
					</Route>
					<Route exact path='/'>
						<List />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}
