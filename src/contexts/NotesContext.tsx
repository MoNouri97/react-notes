/* eslint-disable react/prop-types */
import React, { useState, createContext } from 'react';
import { v1 as uuid } from 'uuid';
import PropTypes from 'prop-types';

import Note from '../models/note.model';

type ContextProps = {
	notes: Note[];
	addNote: (t: string, b: string) => void;
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

	const addNote = (title: string, note: string) => {
		const id = uuid();
		setNotes([...notes, new Note(id, title, note)]);
	};
	return (
		<NotesContext.Provider value={{ notes: notes, addNote: addNote }}>
			{children}
		</NotesContext.Provider>
	);
}
