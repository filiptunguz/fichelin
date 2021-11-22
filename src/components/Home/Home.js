import React from 'react';

import "./Home.scss";
import TypeNavigation from "./TypeNavigation/TypeNavigation";
import HeaderSwiper from "./HeaderSwiper/HeaderSwiper";
import Tires from "./Tires/Tires";

const Home = (props) => {
	return (
		<div className="container">
			<h1>Online prodaja <span>guma</span></h1>
			<h2>Fichelin</h2>
			<HeaderSwiper />
			<TypeNavigation />
			<Tires />
		</div>
	);
}

export default Home;
