import React from 'react';
import '../styles/MovieCarousel.css';
import { Star } from '@mui/icons-material';

const MovieCarousel = (props) => {
	const result = props.movie;
	let backdrop_url = 'https://image.tmdb.org/t/p/w500';
	let poster_url = 'https://image.tmdb.org/t/p/w342';

	return (
		<div className='MovieCarousel'>
			<div className='MovieCarousel_poster'>
				<img
					className='MovieCarousel_poster_img'
					src={`${backdrop_url}${result.backdrop_path}`}
					alt=''
				/>
			</div>
			<div className='MovieCarousel_div_movieImg'>
				<section className='MovieCarousel_section_movieImg'>
					<img
						src={`${poster_url}${result.poster_path}`}
						alt=''
					/>
				</section>
				<section className='MovieCarousel_section_movieText'>
					<span className='heading'>
						<h2> {`${result.original_title}`}</h2>{' '}
					</span>
					<span>
						{`${result.vote_average}`}
						<Star className='Star' />
					</span>
					<span>{`${result.overview}`}</span>
				</section>
			</div>
		</div>
	);
};

export default MovieCarousel;
