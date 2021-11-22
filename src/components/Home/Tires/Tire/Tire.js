import React, {useState} from 'react';

import "./Tire.scss";
import Tire1 from "../../../../assets/img/tires/tire1.jpg";

const Tire = (props) => {
	const [count, setCount] = useState(1);

	const decreaseCountHandler = () => {

	}

	return (
		<div className="Tire" id={'tire' + props.unique}>
			<span className="famous">
				Najtrazenije
			</span>
			<div className="tireImage" style={{ backgroundImage: `url(${Tire1})`}} id={'tire-image' + props.unique}>

			</div>
			<div className="totalTires">
				<p>Raspoloziva kolicina:</p>
				<span>10+</span>
			</div>
			<div className="cartOptions">
				<div className="countTires">
					<button onClick={() => count > 1 ? setCount(count - 1) : null}>-</button>
					<span>{count}</span>
					<button onClick={() => setCount(count + 1)}>+</button>
				</div>
				<div className="addToCart">
					<button className="cartButton" id={'add-to-card' + props.unique}>Dodaj u korpu</button>
				</div>
			</div>
			<button className="buyNow" id={'buy-now' + props.unique}>
				Kupi odmah
			</button>
		</div>
	);
}

export default Tire;
