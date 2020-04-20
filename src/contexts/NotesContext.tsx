/* eslint-disable react/prop-types */
import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

type ContextProps = {
	notes: string[];
	addNote: (n: string) => void;
};

export const NotesContext = createContext<Partial<ContextProps>>({});

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
	const [notes, setNotes] = useState(['first notes', 'second notes']);

	const addNote = (note: string) => {
		setNotes([...notes, note]);
		console.log(note);
	};
	return (
		<NotesContext.Provider value={{ notes: notes, addNote: addNote }}>
			{children}
		</NotesContext.Provider>
	);
}
