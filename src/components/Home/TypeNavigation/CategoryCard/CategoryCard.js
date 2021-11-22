import React from 'react';

import './CategoryCard.scss';
import SvgIcon from "../../../../containers/SvgIcon/SvgIcon";

const CategoryCard = (props) => {
	return (
		<div className="categoryCard" id={'category-' + props.unique}>
			<div className="redSvg">
				<SvgIcon svg="sun" />
			</div>
			<div className="categoryText">
				{props.category}
			</div>
		</div>
	);
}

export default CategoryCard;
