import React from 'react';

import "./TypesCard.scss";
import SvgIcon from "../../../../containers/SvgIcon/SvgIcon";

const TypesCard = (props) => {
	return (
		<div className={`types-card ${props.checked? 'focus' : ''}`} id={'type-' + props.unique} onClick={() => props.switchType(props.type)}>
			<SvgIcon svg={props.type}/>
			<p>
				Gume za
				<b> {props.type}</b>
			</p>
		</div>
	);
}

export default TypesCard;
