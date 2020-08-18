import React from 'react';

const movieComponent = ({ movie }) => {
	//const {movie} = props;
	return (
		<div className='card'>
			<img
				className='card--image'
				alt={movie.title + ' poster'}
				src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
			/>
			<h3 className='card--content'>
				<h3 className='card--title'>{movie.title}</h3>
				<p>
					<small>RELEASE DATE: {movie.release_date}</small>
				</p>
				<p>
					<small>RATING: {movie.vote_average}</small>
				</p>
				<p className='card--desc'>{movie.overview}</p>
			</h3>
		</div>
	);
};

export default movieComponent;
