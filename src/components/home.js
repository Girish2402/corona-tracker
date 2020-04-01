import React, { Component } from 'react';
import axios from 'axios'
import $ from 'jquery'
import ReactFlagsSelect from 'react-flags-select';

//import css module
import 'react-flags-select/css/react-flags-select.css';

//OR import sass module
// import 'react-flags-select/scss/react-flags-select.scss';



class Home extends Component {

	state = {
		posts: {}
	}

	componentDidMount = () => {
		this.updateResult();
		// $('select').selectpicker();
	}

	updateResult = () =>{
		axios.get("https://corona.lmao.ninja/all").then((resp) => {
			this.setState({
				posts: resp.data
			})
		})
	}

	handleOnClick = (e) =>{
		this.updateResult();
	}


	render() {
		return (
			<div className="row mt-4">
				<div className="col-md-12">
					<div className="card text-center">
						<div className="card-header">
							<h3>
								Cases Across The Globe
							</h3>
						</div>
						<div className="card-body">
							<div className="row">
								<div className="col-md-3">
									<div className="card bg-light mb-3" >
										<div className="card-header">Total Cases</div>
										<div className="card-body">
											<h5 className="card-title">{this.state.posts.cases}</h5>
										</div>
									</div>
								</div>
								<div className="col-md-3">
									<div className="card bg-light mb-3 text-info">
										<div className="card-header">Active Cases</div>
										<div className="card-body">
											<h5 className="card-title">{this.state.posts.active}</h5>
										</div>
									</div>
								</div>
								<div className="col-md-3">
									<div className="card bg-light mb-3 text-success">
										<div className="card-header">Recovered</div>
										<div className="card-body">
											<h5 className="card-title">{this.state.posts.recovered}</h5>
										</div>
									</div>
								</div>
								<div className="col-md-3">
									<div className="card bg-light mb-3 text-danger" >
										<div className="card-header">Deaths</div>
										<div className="card-body">
											<h5 className="card-title">{this.state.posts.deaths}</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;