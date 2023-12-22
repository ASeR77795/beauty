import React from 'react';
import './Cards.scss';

import defaultImage from '../../../img/cards/card1.png';

const Cards = ({
	direction = 'row-reverse',
	picture = defaultImage,
	blackText = '',
	title = 'title',
	text = 'text',
	btnClassName = 'none',
	btnText = 'button',
}) => {
	return (
		<section className='container'>
			<div className='cards'>
				{console.log(window.innerWidth)}
				<div className={`box ${window.innerWidth <= 767 ? 'col' : direction}`}>
					{/* <div className='box'> */}
					<div className='img'>
						<img src={picture} alt='Card Image' />
					</div>
					<div className='content'>
						<p className='back'>{blackText}</p>
						<h3 className='title'>{title}</h3>
						<p className='text'>{text}</p>
						<div className={btnClassName}>
							<button className='btn'>{btnText}</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cards;
