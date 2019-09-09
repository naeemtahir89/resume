import React, { Component } from 'react';

import Pdf from './Pdf.pdf';
import { a } from './App.css';
import resume from './Resume.jpg';

export default class Download extends Component {
	render() {
		return (
			<div className="App">
				<a href={Pdf} className={a}>
					Naeem's Resume
				</a>
				<div className="container">
					<img src={resume} alt="fireSpot" />
				</div>
			</div>
		);
	}
}
