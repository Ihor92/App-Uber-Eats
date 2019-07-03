import React from 'react';
import './dishes.css';
import {restaurants} from '../../infoCard.js';

export function Dishes(props) {
	return (
		<div className="snacks__menu-block">
		  <div className="snecks__nemu-description">
		    <div className="snecks__nemu-wrap">
		      <h4 className="snacks__name">{restaurants.sections.title}</h4>
		      <span className="snacks__menu-details">С яйцом и огурцом</span>
		      <span className="snacks__nemu-price nemu-price__wrap">240 ₴₴</span>
		    </div>
		  </div>
		  <img src="img/menu/herring-on-bread.png" alt="Herring on bread" class="snacks__img" />
		</div>
	)
}
