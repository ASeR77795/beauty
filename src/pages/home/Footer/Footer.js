import './Footer.scss';
import React from 'react';

const Footer = () => {
	return (
		<footer className='container'>
			<div className='footer'>
				<div className='box'>
					<div className='item'>
						<div className='about'>
							<h3 className='title'>beauty box</h3>
							<p className='text'>
								Beauty Box Nails & Spa is a luxury salon
								<br />
								located in New York City. We offer a wide
								<br />
								range of services that will get you ready to
								<br />
								impress.
							</p>
						</div>
					</div>

					<div className='item'>
						<div className='content'>
							<h3 className='title'>Contact info</h3>
							<p className='text'>
								We are located on 2091 Broadway in the Upper West Side, New York
								City.
							</p>
							<address className='address'>
								2091 Broadway, New <br />
								York, NY 10023 USA <br />
							</address>
							<div className='contact'>
								<a className='mail' href='mailto:info@example.com'>
									info@example.com
								</a>
								<a className='phone' href='tel:+1234567890'>
									+1 (234) 567-890
								</a>
							</div>
						</div>
					</div>
					<div className='item'>
						<div className='info'>
							<h3 className='title'>info</h3>
							<p className='text'>MONDAY.................10AM - 8:00PM</p>
							<p className='text'>TUESDAY................10AM - 8:00PM</p>
							<p className='text'>WEDNESDAY.......10AM - 8:00PM</p>
							<p className='text'>THURSDAY............10AM - 8:00PM</p>
							<p className='text'>THURSDAY............10AM - 8:00PM</p>
							<p className='text'>THURSDAY............10AM - 8:00PM</p>
							<p className='text'>SUNDAY...................10AM - 7:00PM</p>
						</div>
					</div>
					<div className='item'>
						<div className='feed'>
							<h3 className='title'>instagram feed</h3>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
