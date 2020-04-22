import React, { useState, FormEvent, ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import Note from '../models/note.model';

AddNote.propTypes = {
	submit: PropTypes.func.isRequired,
	note: PropTypes.instanceOf(Note),
};

function AddNote(props: PropTypes.InferProps<typeof AddNote.propTypes>) {
	const [body, setBody] = useState('');
	const [title, setTitle] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log({ title, body });
		props.submit(title, body);
	};

	const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};
	const handleChangeBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setBody(e.target.value);
	};

	return (
		<div className='form-container'>
			<form onSubmit={handleSubmit}>
				<div className='field'>
					<label className='label'>Title</label>
					<div className='control'>
						<input
							className='input'
							type='text'
							value={title}
							onChange={handleChangeTitle}
							placeholder='finish the assignment'
						/>
					</div>
				</div>
				<div className='field'>
					<label className='label'>Body</label>
					<div className='control'>
						<textarea
							className='textarea'
							value={body}
							onChange={handleChangeBody}
							placeholder='body . . .'
							rows={10}
						></textarea>
					</div>
				</div>
				{/* <input type='title' value={title} onChange={handleChange} /> */}
				<div className='field is-grouped is-pulled-right'>
					<div className='control'>
						<button type='button' className='button is-text'>
							Cancel
						</button>
					</div>
					<div className='control'>
						<button type='submit' className='button is-success'>
							Save
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default AddNote;
