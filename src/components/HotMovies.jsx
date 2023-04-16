import React, { useEffect, useState } from 'react';

import '../styles/HotMovies.css';
import Fire from '../assets/Fire.png';
import MovieCard from './MovieCard';
import axios from 'axios';

const HotMovies = () => {
	const [movies, setMovies] = useState([]);
	let url =
		'https://api.themoviedb.org/3/movie/popular?api_key=eaf448398d979ad267711b4ff1e492e4&language=en-US&page=1';

	useEffect(() => {
		const getData = async () => {
			try {
				const { data } = await axios.get(url);
				setMovies(data.results);
			} catch (error) {
				console.log(error);
			}
		};
		setMovies(() => getData());
	}, [url]);

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
				{movies &&
					movies.length > 0 &&
					movies.map((movie) => (
						<MovieCard
							key={movie.id}
							movie={movie}
						/>
					))}
			</div>
		</div>
	);
};

export default HotMovies;
