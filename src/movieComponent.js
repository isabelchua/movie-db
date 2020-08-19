import React from 'react';

const movieComponent = ({ movie }) => {
	//const {movie} = props;
	return (
		<div className='card'>
			<div className='data'>
				<img
					className='card-poster'
					alt={movie.title + ' poster'}
					src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
				/>
			</div>
			<div className='data'>
				<div className='card-details'>
					<h3>{movie.title}</h3>
					<p>
						<b>RELEASE DATE:</b> {movie.release_date}
					</p>
					<p>
						<b>RATING:</b> {movie.vote_average}
					</p>
					<p className='card--desc'>{movie.overview}</p>
				</div>
			</div>
		</div>
	);
};

export default movieComponent;
