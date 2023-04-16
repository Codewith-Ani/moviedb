import React, { useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';

import './styles/App.css';
import Footer from './components/Footer';
import NewMovies from './components/NewMovies';
import HotMovies from './components/HotMovies';

const App = () => {
	const getMovies = async () => {
		try {
			const data = await axios.get(
				'https://api.themoviedb.org/3/movie/76341?api_key=eaf448398d979ad267711b4ff1e492e4&language=en-US'
			);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		getMovies();
	}, []);

	return (
		<div className='App_Container'>
			<Header />
			<Routes>
				<Route
					path='/'
					element={<HotMovies />}
				/>

				<Route
					path='/new'
					element={<NewMovies />}
				/>
				<Route
					path='/new'
					element={<NewMovies />}
				/>
				<Route
					path='/hot'
					element={<HotMovies />}
				/>
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
