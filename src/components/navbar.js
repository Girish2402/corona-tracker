import React, { Component } from 'react';
import Logo from '../logo1.png'

class Navbar extends Component {

	render() {
		return (
			<nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
				<div className="container">
					<a className="navbar-brand" href="#"><img src={Logo} height="60px"/></a>
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">What is Covid-19</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Prevention</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;