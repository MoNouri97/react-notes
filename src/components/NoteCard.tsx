import React from 'react';
import PropTypes from 'prop-types';
import Note from '../models/note.model';

NoteCard.propTypes = {
	note: PropTypes.instanceOf(Note).isRequired,
};

export default function NoteCard(
	props: PropTypes.InferProps<typeof NoteCard.propTypes>,
) {
	const note: Note = props.note;

	return (
		<div className='note-card-container'>
			{/*  <a [routerLink]="note.id"> */}
			<div className='note-card-content'>
				<h1 className='note-card-title'>{note.title}</h1>
				<div className='note-card-body'>
					<p>{note.body} </p>
					<div className='fade-out-truncation'></div>
				</div>
			</div>
			{/*   </a> */}

			<div className='x-btn'></div>
		</div>
	);
}
