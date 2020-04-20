import React, { Component } from 'react';
import TodoCard from './TodoCard';

export default class List extends Component {
	render() {
		return (
			<div className='mainLayout'>
				<div className='main-container'>
					<div className='search-bar-container'>
						<div className='field'>
							<p className='control has-icons-left'>
								<input
									className='input'
									type='text'
									placeholder='Filter'
									//   (keyup)="filter($event.target.value)"
								/>
								<span className='icon is-small is-left'>
									<i data-feather='search'></i>
								</span>
							</p>
						</div>
					</div>

					<div className='notes-list'>
						{/* cards here */}
						<TodoCard />
					</div>
					<button
						className='button floating-add-button is-primary'
						// routerLink='new'
					>
						+ Add
					</button>
				</div>
			</div>
		);
	}
}
