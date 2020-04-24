import React, { useContext, useState } from 'react';
import { NotesContext } from '../contexts/NotesContext';
import NoteCard from './NoteCard';
import { Link } from 'react-router-dom';
import Note from '../models/note.model';

export default function List() {
	const { notes, deleteNote } = useContext(NotesContext);
	const [filtered, setFiltered] = useState(notes);

	//#region Filter
	const filter = (query: string) => {
		// getting words
		query = query.toLowerCase().trim();

		if (query == '') {
			// empty search
			setFiltered(notes);
			return;
		}

		let terms: string[] = query.split(' ');

		// removing duplicates
		terms = removeDuplicates(terms);

		let allResults: Note[] = new Array<Note>();

		terms.forEach((term) => {
			let results: Note[] = relevantNotes(term);
			allResults.push(...results);
		});

		setFiltered(sortByRelevancy(allResults));
	};

	const removeDuplicates = (arr: Array<any>): Array<any> => {
		let unique: Set<any> = new Set<any>();

		arr.forEach((e) => unique.add(e));
		return Array.from(unique);
	};

	const relevantNotes = (query: string): Note[] => {
		query = query.toLowerCase().trim();
		let relevant = notes!.filter((note) => {
			return (
				(note.body && note.body.toLowerCase().trim().includes(query)) ||
				note.title.toLowerCase().trim().includes(query)
			);
		});
		return relevant;
	};

	const sortByRelevancy = (searchRes: Note[]) => {
		let uniqueResults = removeDuplicates(searchRes);
		let noteCount: { [x: string]: number } = {};

		searchRes.forEach((note) => {
			let noteId = note.id;

			if (noteCount && noteCount[noteId]) {
				noteCount[noteId] += 1;
			} else {
				noteCount[noteId] = 1;
			}
		});
		console.log({ noteCount });

		const sorted = uniqueResults.sort((a, b) => {
			return noteCount[b.id] - noteCount[a.id];
		});
		return sorted;
	};
	//#endregion

	//#region render
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
								onChange={(e) => {
									filter(e.target.value);
								}}
							/>
							<span className='icon is-small is-left'>
								<i data-feather='search'></i>
							</span>
						</p>
					</div>
				</div>
				<div className='notes-list'>
					{filtered && filtered.length > 0 ? (
						filtered.map((n) => (
							<NoteCard key={n.id} note={n} delete={deleteNote!} />
						))
					) : (
						<p>No More Notes . . .</p>
					)}
				</div>
				<Link className='button floating-add-button is-primary' to='/add'>
					+ Add
				</Link>
			</div>
		</div>
	);
	//#endregion
}
