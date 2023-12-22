import './Banner.scss';
import React from 'react';
import row from '../../../img/row.png';

const Banner = () => {
	return (
		<div className='container'>
			<div className='banner'>
				<div className='content'>
					<p className='pre-title'>Luxury you deserve</p>
					<h1 className='title'>
						be your
						<br />
						best
					</h1>
					<p className='text'>
						<span>beauty box is the place</span>
						<span>for all your beauty needs</span>
					</p>
					<div className='img-box'>
						<img src={row} />
					</div>
				</div>
				<div className='button-box'>
					<button className='button'>book now</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
