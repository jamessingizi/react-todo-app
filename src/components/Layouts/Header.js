import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return(
		<header style={headerStyle}>
			<h2 >Todo List</h2>
			<Link to='/' style={linkStyle} >Home</Link> | <Link to='/about' style={linkStyle} >About</Link>
		</header>
	)
}

const headerStyle = {
	background: '#333',
	color: '#fff',
	textAlign: 'center',
	padding: '10px'

}

const linkStyle = {
	color: '#FFF',
}

export default Header