import React, { Component } from 'react';
import axios from 'axios'



class Home extends Component {

	state = {
		posts: {}
	}

	componentDidMount(){
		axios.get("https://corona.lmao.ninja/all").then((resp) => {
		this.setState({
				posts: resp.data
			})
		})
	}


	render() {
		return (
			<div classNmae="jumbotron">
				<h1 classNmae="display-4">Hello, world!</h1>
				<p classNmae="lead">This is a simple Corona Tracker App, We are here to serve you the latest update.</p>
				<hr classNmae="my-4"/>
				<p>Cases Across the globe.</p>
				<div className="alert alert-primary" role="alert">
					Total Cases: {this.state.posts.cases}
				</div>
				<div className="alert alert-danger" role="alert">
					Total Deaths: {this.state.posts.deaths}
				</div>
				<div className="alert alert-success" role="alert">
					Total Recovered: {this.state.posts.recovered}
				</div>
				<div className="alert alert-info" role="alert">
					Total active: {this.state.posts.active}
				</div>
			</div>
		);
	}
}

export default Home;