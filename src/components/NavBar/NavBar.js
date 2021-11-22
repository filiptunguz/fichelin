import React from 'react';
import {Link} from "react-router-dom";

import './NavBar.scss';

const NavBar = (props) => {
	return (
		<div className="NavBar">
			<nav>
				<Link to="/" id={'home-nav'}>Pocetna</Link>
				<Link to="/" id={'contact-nav'}>Kontakt</Link>
				<Link to="/" id={'faq-nav'}>Najcesca pitanja</Link>
				<Link to="/" id={'policy-nav'}>Opsti uslovi</Link>
				<Link to="/" id={'cart-nav'}>Korpa</Link>
			</nav>
		</div>
	);
}

export default NavBar;
