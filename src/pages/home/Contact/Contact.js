import './Contact.scss';
import React from 'react';

const Contact = () => {
	return (
		<div className='container'>
			<div className='contacts'>
				<div className='box'>
					<div>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.2099067969857!2d-73.9848203240614!3d40.779399233487005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588a0502876d%3A0xc846668cdc7ff044!2s2091%20Broadway%2C%20New%20York%2C%20NY%2010023!5e0!3m2!1sru!2sus!4v1700182592093!5m2!1sru!2sus'
							width={`${window.innerWidth - 300}px`}
							height='300'
							style={{ border: 0 }}
							allowfullscreen=''
							loading='lazy'
							referrerpolicy='no-referrer-when-downgrade'
						></iframe>
						{/* {window.innerWidth <= 767 ? (
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.2099067969857!2d-73.9848203240614!3d40.779399233487005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588a0502876d%3A0xc846668cdc7ff044!2s2091%20Broadway%2C%20New%20York%2C%20NY%2010023!5e0!3m2!1sru!2sus!4v1700182592093!5m2!1sru!2sus'
								width='400'
								height='300'
								style={{ border: 0 }}
								allowfullscreen=''
								loading='lazy'
								referrerpolicy='no-referrer-when-downgrade'
							></iframe>
						) : (
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.2099067969857!2d-73.9848203240614!3d40.779399233487005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588a0502876d%3A0xc846668cdc7ff044!2s2091%20Broadway%2C%20New%20York%2C%20NY%2010023!5e0!3m2!1sru!2sus!4v1700166735040!5m2!1sru!2sus'
								width='600'
								height='450'
								style={{ border: 0 }}
								allowfullscreen=''
								loading='lazy'
								referrerpolicy='no-referrer-when-downgrade'
							></iframe>
						)} */}
					</div>
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
			</div>
		</div>
	);
};

export default Contact;
