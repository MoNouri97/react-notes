import React, { useState, FormEvent } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import Note from '../models/note.model';

NoteForm.propTypes = {
	submit: PropTypes.func.isRequired,
	initial: PropTypes.instanceOf(Note),
};

function NoteForm(props: PropTypes.InferProps<typeof NoteForm.propTypes>) {
	// initialize State
	let bodyValue = '',
		titleValue = '';
	if (props.initial) {
		bodyValue = props.initial.body;
		titleValue = props.initial.title;
	}

	// State
	const [body, setBody] = useState(bodyValue);
	const [title, setTitle] = useState(titleValue);

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

export default NoteForm;
