import React, { useEffect, useState } from 'react';

import '../styles/HotMovies.css';
import Fire from '../assets/Fire.png';
import MovieCard from './MovieCard';
import axios from 'axios';

const HotMovies = () => {
	const [popularMovies, setPopularMovies] = useState();

	let API_key = 'eaf448398d979ad267711b4ff1e492e4';
	let baseUrl = 'https://api.themoviedb.org/3';

	const getPopularMovies = async () => {
		try {
			const { data } = await axios.get(
				baseUrl + '/movie/popular?api_key=' + API_key + '&language=en-US&page=1'
			);
			setPopularMovies(data.results);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		getPopularMovies();
	}, []);

	return (
		<div className='hotmovies'>
			<span>
				<h2>What's Hot</h2>
				<img
					src={Fire}
					alt='Fire'
				/>
			</span>
			<div className='hotmovies_CardContainer'>
				{console.log(typeof [popularMovies])}
			</div>
		</div>
	);
};

export default HotMovies;
