/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<ul>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/products'>Products</Link>
			</li>
			<li>
				<Link to='/login'>Login</Link>
			</li>
			<li>
				<Link to='/posts/2018/06'>Posts</Link>
			</li>
		</ul>
	);
};

export default NavBar;
