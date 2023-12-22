import React from 'react';
import Header from '../../components/Header/Header';
import Banner from './Banner/Banner';
import Book from './Book/Book';
import photo from '../../img/photo-logo.png';
import gift from '../../img/gift.png';
import About from './About/About';
import Cards from './Cards/Cards';
import img from '../../img/cards/card1.png';
import img2 from '../../img/cards/card2.png';
import img3 from '../../img/cards/card3.png';
import img4 from '../../img/cards/card4.png';
import img5 from '../../img/cards/card5.png';
import img6 from '../../img/cards/card6.png';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const cardData = [
	{
		direction: 'row',
		picture: img,
		blackText: 'Safety',
		title: 'Temperature Check',
		text: 'Each manicure station provides a safety screen and a non-touch sanitizing device for extra precaution along with a cell phone holder and charger for your comfort.',
	},
	{
		picture: img2,
		blackText: 'Lounge',
		title: 'waiting area',
		text: 'We use the latest technology devices such as a non-contact temperature checking device to keep an accurate screening for every customer’s safety.',
	},
	{
		picture: img3,
		direction: 'row',
		blackText: 'Safety',
		title: 'Manicure Station',
		text: 'Each manicure station provides a safety screen and a non-touch sanitizing device for extra precaution along with a cell phone holder and charger for your comfort.',
	},
	{
		picture: img4,
		title: 'pedicure station',
		text: 'Every pedicure station is divided by a remote controlled blind for extra privacy, health and safety from COVID.',
	},
	{
		picture: img5,
		direction: 'row',
		title: 'nail polish',
		text: 'We offer a wide selection of nail polishes from a basic to higher end brands such as London Town and Chanel.',
		btnClassName: 'button',
		btnText: 'book now',
	},
	{
		picture: img6,
		blackText: 'Spacious',
		title: 'our salon',
		text: 'We use the latest technology devices such as a non-contact temperature checking device to keep an accurate screening for every customer’s safety.',
	},
];

const Main = () => {
	return (
		<>
			<Header />
			<main>
				<Banner />
				<Book
					preTitle='new york • since 2020'
					title='book with us'
					text="Now you can book with us online. For everyone's safety, appointments are preferred."
					buttonText='book now'
					// direction='row-reverse'
					direction='row'
					photo={photo}
				/>
				<Book
					preTitle='new york • since 2020'
					title='book with us'
					text="Now you can book with us online. For everyone's safety, appointments are preferred."
					buttonText='book now'
					photo={gift}
				/>
				<About />
				{cardData.map((item, index) => {
					return <Cards key={index} {...item} />;
				})}
				<Contact />
				<Footer />
			</main>
		</>
	);
};

export default Main;
