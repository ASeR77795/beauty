import './Book.scss';
import React from 'react';

const Book = ({
	preTitle = '',
	title = '',
	text = '',
	buttonText = '',
	direction = 'row-reverse',
	photo = '',
}) => {
	return (
		<section className='container'>
			<div className='book'>
				<div className='box' style={{ flexDirection: direction }}>
					<div className='photo'>
						<img src={photo} />
					</div>
					<div className='content'>
						<div className='box'>
							<p className='pre-title'>{preTitle}</p>
							<h2 className='title'>{title}</h2>
							<p className='text'>{text}</p>
							<div>
								<button className='button'>{buttonText}</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Book;
