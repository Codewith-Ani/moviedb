import React, { useEffect, useState } from 'react';

import '../styles/NewMovies.css';

import Popcorn from '../assets/Pop.png';
import axios from 'axios';

import Carousel from 'react-material-ui-carousel';

import MovieCarousel from './MovieCarousel';

const NewMovies = () => {
	const [movies, setMovies] = useState([]);
	let url =
		'https://api.themoviedb.org/3/movie/now_playing?api_key=eaf448398d979ad267711b4ff1e492e4&language=en-US&page=1';

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
		<div className='newmovies'>
			<span>
				<h2>New Releases</h2>
				<img
					src={Popcorn}
					alt='PopCorn'
				/>
			</span>
			<div className='newmovies_CardContainer'>
				<Carousel className='ImageCarousel'>
					{movies &&
						movies.length > 0 &&
						movies.map((movie) => (
							<MovieCarousel
								key={movie.id}
								movie={movie}
							/>
						))}
				</Carousel>
			</div>
		</div>
	);
};
export default NewMovies;
