import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import List from './components/List';
import NotesContextProvider from './contexts/NotesContext';
import AddNote from './components/AddNote';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<div className='page-content'>
				<NotesContextProvider>
					<AddNote />
					<List />
				</NotesContextProvider>
			</div>
		</div>
	);
}

export default App;
