import React, {useState} from 'react';

import "./TypeNavigation.scss";
import TypesCard from "./TypesCard/TypesCard";
import CategoryCard from "./CategoryCard/CategoryCard";

const TypeNavigation = (props) => {
	const typeCards = ['auto', 'kombi', 'suv', 'skuter', 'motor', 'agro'];
	const categoryCards = ['letnja', 'zimska', 'sve sezone', 'vikend akcija'];

	const [check, setCheck] = useState('auto');

	const switchTypeHandler = (el) => {
		setCheck(el);
	}

	return (
		<div className="TypeNavigation">
			<div className="types">
				{
					typeCards.map(el => {
						let checked = el === check;
						return <TypesCard key={el} type={el} unique={el} switchType={switchTypeHandler} checked={checked} />;
					})
				}
			</div>
			<div className="category">
				<p>Izaberite kategoriju</p>
				<div className="categoryCards">
					{
						categoryCards.map(el => {
							let checked = el === check;
							return <CategoryCard key={el} category={el} unique={el} />;
						})
					}
				</div>
			</div>
		</div>
	);
}

export default TypeNavigation;
