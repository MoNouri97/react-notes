import React, { useState, createContext } from 'react';
import { v1 as uuid } from 'uuid';
import PropTypes from 'prop-types';

import Note from '../models/note.model';

type ContextProps = {
	notes: Note[];
	addNote: (t: string, b: string) => void;
	getNote: (id: string) => Note | undefined;
	editNote: (id: string, t: string, b: string) => void;
	deleteNote: (id: string) => void;
};

export const NotesContext = createContext<Partial<ContextProps>>({ notes: [] });

//Props
NotesContextProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default function NotesContextProvider({
	children,
}: PropTypes.InferProps<typeof NotesContextProvider.propTypes>) {
	const [notes, setNotes] = useState([
		new Note('0', 'Add a note', 'notes detail'),
	]);

	// ---
	const addNote = (title: string, body: string) => {
		const id = uuid();
		setNotes([...notes, new Note(id, title, body)]);
	};
	const getNote = (id: string): Note | undefined => {
		return notes.find((note) => note.id === id);
	};
	const editNote = (id: string, title: string, body: string) => {
		setNotes(
			notes.map((note) => {
				if (note.id === id) {
					note.title = title;
					note.body = body;
				}
				return note;
			}),
		);
	};
	const deleteNote = (id: string) => {
		setNotes(notes.filter((note) => note.id != id));
	};

	return (
		<NotesContext.Provider
			value={{
				notes: notes,
				addNote: addNote,
				getNote: getNote,
				deleteNote: deleteNote,
				editNote: editNote,
			}}
		>
			{children}
		</NotesContext.Provider>
	);
}
