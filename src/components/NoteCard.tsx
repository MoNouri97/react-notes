import React from 'react';
import PropTypes from 'prop-types';

NoteCard.propTypes = {
	note: PropTypes.string.isRequired,
};

export default function NoteCard(
	props: PropTypes.InferProps<typeof NoteCard.propTypes>,
) {
	const note: string = props.note;
	return (
		<div className='note-card-container'>
			{/*  <a [routerLink]="note.id"> */}
			<div className='note-card-content'>
				<h1 className='note-card-title'>{note}</h1>
				<div className='note-card-body'>
					<p>body</p>
					<div className='fade-out-truncation'></div>
				</div>
			</div>
			{/*   </a> */}

			<div className='x-btn'></div>
		</div>
	);
}
