import React, { useContext } from 'react';
import NoteForm from './NoteForm';
import { NotesContext } from '../contexts/NotesContext';

function AddNote() {
	let { addNote } = useContext(NotesContext);

	return <NoteForm submit={addNote!} />;
}

export default AddNote;
