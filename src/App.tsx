import React from 'react';

import './App.scss';
import Navbar from './components/Navbar';
import NotesContextProvider from './contexts/NotesContext';
import MainLayout from './components/MainLayout';

function App() {
	return (
		<div className='App'>
			<NotesContextProvider>
				<Navbar />
				<div className='page-content'>
					<MainLayout />
				</div>
			</NotesContextProvider>
		</div>
	);
}

export default App;
