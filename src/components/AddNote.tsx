import React, { useState, FormEvent } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import Note from '../models/note.model';

AddNote.propTypes = {
	submit: PropTypes.func.isRequired,
	note: PropTypes.instanceOf(Note),
};

function AddNote(props: PropTypes.InferProps<typeof AddNote.propTypes>) {
	const [body, setBody] = useState('');
	const [title, setTitle] = useState('');
	const history = useHistory();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		props.submit(title, body);
		history.push('/');
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
							onChange={(e) => {
								setTitle(e.target.value);
							}}
							placeholder='finish the assignment'
							required
						/>
					</div>
				</div>
				<div className='field'>
					<label className='label'>Body</label>
					<div className='control'>
						<textarea
							className='textarea'
							value={body}
							onChange={(e) => {
								setBody(e.target.value);
							}}
							placeholder='body . . .'
							rows={10}
						></textarea>
					</div>
				</div>
				{/* <input type='title' value={title} onChange={handleChange} /> */}
				<div className='field is-grouped is-pulled-right'>
					<div className='control'>
						<Link to='/' type='button' className='button is-text'>
							Cancel
						</Link>
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
