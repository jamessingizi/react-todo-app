import React from 'react';

function Header() {
	return(
		<header>
			<h2 style={headerStyle}>Todo List</h2>
		</header>
	)
}

const headerStyle = {
	background: '#333',
	color: '#fff',
	textAlign: 'center',
	padding: '10px'

}

export default Header