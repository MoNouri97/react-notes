import React, { useContext } from 'react';
import { NotesContext } from '../contexts/NotesContext';
import NoteCard from './NoteCard';

export default function List() {
	const { notes, addNote } = useContext(NotesContext);

	return (
		<div className='mainLayout'>
			<div className='main-container'>
				<div className='search-bar-container'>
					<div className='field'>
						<p className='control has-icons-left'>
							<input
								className='input'
								type='text'
								placeholder='Filter'
								//   (keyup)="filter($event.target.value)"
							/>
							<span className='icon is-small is-left'>
								<i data-feather='search'></i>
							</span>
						</p>
					</div>
				</div>
				<div className='notes-list'>
					{notes &&
						notes.map((t, i) => <NoteCard key={i} note={t} />)}
				</div>
				<button
					className='button floating-add-button is-primary'
					onClick={() => {
						addNote && addNote('newNote');
					}}
				>
					+ Add
				</button>
			</div>
		</div>
	);
}
