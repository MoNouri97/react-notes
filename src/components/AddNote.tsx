import React, { useState, FormEvent, ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import Note from '../models/note.model';

function AddNote(props: PropTypes.InferProps<typeof AddNote.propTypes>) {
	const [body, setBody] = useState('');
	const [title, setTitle] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log({ title });
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='field'>
				<p className='control has-icons-left'>
					<input
						className='input'
						type='title'
						value={title}
						onChange={handleChange}
						placeholder='Filter'
					/>
					<span className='icon is-small is-left'>
						<i data-feather='search'></i>
					</span>
				</p>
			</div>
			{/* <input type='title' value={title} onChange={handleChange} /> */}
			<button className='button is-primary' type='submit'>
				Add
			</button>
		</form>
	);
}

AddNote.propTypes = {
	// note: PropTypes.instanceOf(Note),
};

export default AddNote;
