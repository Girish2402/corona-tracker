import React, { Component } from 'react';
import axios from 'axios'
import $ from 'jquery'
import ReactFlagsSelect from 'react-flags-select';
import Card from './card'

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
									<Card textColor="" title="Total Cases" count={this.state.posts.cases} />
								</div>
								<div className="col-md-3">
									<Card textColor="text-info" title="Active Cases" count={this.state.posts.active} />
								</div>
								<div className="col-md-3">
									<Card textColor="text-success" title="Recovered" count={this.state.posts.recovered} />
								</div>
								<div className="col-md-3">
									<Card textColor="text-danger" title="Deaths" count={this.state.posts.deaths}/>
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