import React from 'react';
import CarSvg from '../../assets/svg/car.png';
import VanSvg from '../../assets/svg/van.png';
import SunSvg from '../../assets/svg/sun.png';

const SvgIcon = (props) => {
	let svg = '';

	switch (props.svg) {
		case 'auto':
			svg = <img src={CarSvg} alt="Car SVG" />
			break;
		case 'sun':
			svg = <img src={SunSvg} alt="Sun SVG" />
			break;
		default:
			svg = <img src={VanSvg} alt="Van SVG" />
	}

	return (
		<div className='svg'>
			{svg}
		</div>
	);
}

export default SvgIcon;
