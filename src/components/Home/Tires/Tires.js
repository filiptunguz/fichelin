import React from 'react';

import  './Tires.scss';
import Tire from "./Tire/Tire";

const Tires = (props) => {
	return (
		<div className="Tires">
			<Tire unique='#1' />
			<Tire unique='#2' />
			<Tire unique='#3' />
			<Tire unique='#4' />
			<Tire unique='#5' />
			<Tire unique='#6' />
			<Tire unique='#7' />
			<Tire unique='#8' />
			<Tire unique='#9' />
		</div>
	);
}

export default Tires;
