import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import '../styles/MovieCard.css';
import StarIcon from '@mui/icons-material/Star';

const MovieCard = (props) => {
	return (
		<Card className='Card'>
			<CardActionArea className='Card_CardArea'>
				<CardMedia
					className='CardMedia'
					component='img'
					image={props.movieImg}
					alt='green iguana'
					style={{ width: '150px', height: '225px' }}
				/>
				<CardContent className='Card_CardContent'>
					<div className='card_text'>
						{props.rating} <StarIcon className='Star' />
					</div>
					<div>{props.Name}</div>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default MovieCard;
