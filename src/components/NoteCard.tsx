import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Note from '../models/note.model';
import { useHistory } from 'react-router-dom';

NoteCard.propTypes = {
	note: PropTypes.instanceOf(Note).isRequired,
	delete: PropTypes.func.isRequired,
};

export default function NoteCard(
	props: PropTypes.InferProps<typeof NoteCard.propTypes>,
) {
	const note: Note = props.note;
	const history = useHistory();
	// fade long text
	let bodyEl: HTMLDivElement;
	let fadeEl: HTMLDivElement;

	useEffect(() => {
		// the viewable height is not the real height of the body (long text)
		if (bodyEl.scrollHeight > bodyEl.clientHeight) {
			fadeEl.style.display = 'block';
		} else {
			fadeEl.style.display = 'none';
		}
	});

	const handleClick = () => {
		history.push('/note/' + note.id);
	};

	return (
		<div className='note-card-container'>
			<div className='note-card-content' onClick={handleClick}>
				<h1 className='note-card-title'>{note.title}</h1>
				<div
					className='note-card-body'
					ref={(e) => {
						bodyEl = e!;
					}}
				>
					<p>{note.body} </p>
					<div
						className='fade-out-truncation'
						ref={(e) => {
							fadeEl = e!;
						}}
					></div>
				</div>
			</div>

			<div
				className='x-btn'
				onClick={() => {
					props.delete(note.id);
				}}
			></div>
		</div>
	);
}
