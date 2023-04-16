import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

import '../styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='header'>
			<Link
				to='/'
				className='header_Menu'>
				<MenuIcon className='header_Menu' />
			</Link>

			<Link to='/'>
				<button className='header_button'>Movie DB</button>
			</Link>
			<section className='header_nav'>
				<Link
					className='header_nav_releases'
					to='/new'>
					New Releases
				</Link>
				<Link
					className='header_nav_popular'
					to='/hot'>
					What's Hot
				</Link>
			</section>
		</div>
	);
};

export default Header;
