import './Header.scss';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import logoBlack from '../../img/logo-black.webp';
import logoWhite from '../../img/logo-white.png';
import Burger from '../Burger/Burger';
import Nav from '../Nav/Nav';

const Header = () => {
	const isMobile = useMediaQuery({
		query: '(max-device-width: 767px)',
	});

	return (
		<header className='container'>
			<div className='header'>
				<div className='box'>
					<div className='logo'>
						<img
							className='item'
							src={isMobile ? logoBlack : logoWhite}
							alt='Logo'
						/>
					</div>
					<div className='nav'>{isMobile ? <Burger /> : <Nav />}</div>
					<div className={isMobile ? 'none' : 'button'}>
						<button className='btn'>
							<svg
								width='18'
								height='15'
								viewBox='0 0 18 15'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g
									id='Link &#226;&#134;&#146; SVG'
									clip-path='url(#clip0_1_275)'
								>
									<path
										id='Vector'
										d='M0 14.28H18V12.28H0V14.28ZM0 8.27999H18V6.27999H0V8.27999ZM0 2.27999H18V0.278992H0V2.27999Z'
										fill='white'
									/>
								</g>
								<defs>
									<clipPath id='clip0_1_275'>
										<rect
											width='18'
											height='14'
											fill='white'
											transform='translate(0 0.279999)'
										/>
									</clipPath>
								</defs>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
