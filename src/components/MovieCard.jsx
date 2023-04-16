import * as React from 'react';

import '../styles/MovieCard.css';
import StarIcon from '@mui/icons-material/Star';
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';

let base_url = 'https://image.tmdb.org/t/p/w500';

const MovieCard = (props) => {
	const result = props.movie;
	return (
		<Card className='Card'>
			<CardActionArea className='Card_CardArea'>
				<CardMedia
					className='CardMedia'
					component='img'
					image={`${base_url}${result.backdrop_path}`}
					alt='green iguana'
					style={{ width: '100%	', height: '225px' }}
				/>
				<CardContent className='Card_CardContent'>
					<div className='card_text'>
						{`${result.vote_average}`} <StarIcon className='Star' />
					</div>
					<div>{`${result.original_title}`}</div>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default MovieCard;
