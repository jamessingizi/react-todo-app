import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
	
	getStyle = () => {
		return {
			background: '#e4e4e4',
			padding: '10px',
			borderBottom: '1px #bbb dotted',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		}
	}

	
  render() {
  	const {id, title } = this.props.todo;
  	return(
  		<div style={this.getStyle()}>
  			<p>
  				<input type="checkbox" onChange={this.props.markComplete.bind(this,id)} /> {' '}
  				{title}
  				<button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>x</button>
  			</p>
  		</div>
  	);
  }
}

const btnStyle = {
	background: '#cc2233',
	color: '#fff',
	padding: '5px 10px',
	border: 'none',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
}

//PropTypes
TodoItem.propTypes= {
	todo: PropTypes.object.isRequired
}

export default TodoItem;
