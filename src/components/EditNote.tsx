import React, { useContext } from 'react';
import NoteForm from './NoteForm';
import { useParams } from 'react-router-dom';
import { NotesContext } from '../contexts/NotesContext';

export default function EditNote() {
	const { id } = useParams();
	const { getNote, editNote } = useContext(NotesContext);

	// ! is to confirm that id & editNote are not undefined
	const noteToEdit = getNote!(id!);

	if (!noteToEdit) {
		return <div className='error'>Not Found</div>;
	}

	const handleSubmit = (title: string, body: string) => {
		editNote!(id!, title, body);
	};

	return <NoteForm submit={handleSubmit} initial={noteToEdit} />;
}
