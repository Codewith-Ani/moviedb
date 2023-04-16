import React, { useEffect, useState } from 'react';

import '../styles/HotMovies.css';
import Fire from '../assets/Fire.png';
import MovieCard from './MovieCard';
import Avatar from '../assets/movieImg.jpg';
import axios from 'axios';

const HotMovies = () => {
	const [movies, setMovies] = useState([]);
	let url =
		'https://api.themoviedb.org/3/movie/popular?api_key=eaf448398d979ad267711b4ff1e492e4&language=en-US&page=1';

	const getMovies = async () => {
		try {
			const { data } = await axios.get(url);
			setMovies(data.results);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getMovies();
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
				{movies.length === 0
					? '<p> Not Found </p>'
					: movies.map((movie) => {
							console.log(movie.original_title);

							<MovieCard
								key={movie.id}
								movieImg={Avatar}
								Name={movie.original_title}
								rating={movie.vote_average}
							/>;
					  })}
			</div>
		</div>
	);
};

export default HotMovies;
