import './style/reset.scss';
import './style/common.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home/Home';
import App from './App';

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);
