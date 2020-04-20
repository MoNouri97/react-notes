import React, { Component } from 'react';

export default class TodoCard extends Component {
	render() {
		return (
			<div className='note-card-container'>
				{/*  <a [routerLink]="note.id"> */}
				<div className='note-card-content'>
					<h1 className='note-card-title'>Title</h1>
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
}
