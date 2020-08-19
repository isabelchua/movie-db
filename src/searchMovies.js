import React, { useState } from 'react';
import MovieComponent from './movieComponent';

export default function SearchMovies() {
	const [query, setQuery] = useState('');
	const [movies, setMovies] = useState([]);

	const searchMovies = async e => {
		e.preventDefault();
		//const query = 'Jurassic Park';
		const url = `https://api.themoviedb.org/3/search/movie?api_key=f1a50cb6e1e03f9f78f4c187e1b6c0e0&language=en-US&query=${query}&page=1&include_adult=false`;

		try {
			const res = await fetch(url);
			const data = await res.json();
			//console.log(data);

			//object inner array
			//console.log(data.results);
			setMovies(data.results);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='wrapper'>
			<form className='form' onSubmit={searchMovies}>
				<input
					className='input'
					type='text'
					name='query'
					placeholder='e.g. The Lion King '
					query={query}
					required='required'
					onChange={e => setQuery(e.target.value)}
				/>
				<button className='button' type='submit'>
					Search
				</button>
			</form>
			<div className='card-list'>
				{movies
					.filter(movie => movie.poster_path)
					.map(movie => (
						<MovieComponent movie={movie} key={movie.id} />
					))}
			</div>
		</div>
	);
}
