import './About.scss';
import React from 'react';

const About = () => {
	return (
		<section className='container'>
			<div className='about'>
				<div className='wrapper'>
					<div className='box'>
						<h3 className='title'>About</h3>
						<p className='text'>
							We are a luxury nails & spa salon located 2091 Broadway, New York,
							NY. We offer a wide range of services from manicures, pedicures,
							eyelash extensions, facials, aromatherapy, massages, etc. At
							Beauty Box, you will receive the luxury treatment you deserve.
						</p>
						<div className='button'>
							<button className='btn'>learn more</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
