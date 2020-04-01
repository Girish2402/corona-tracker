import React, { Component } from 'react';
import axios from 'axios'
import Card from './card'
import Country from './country'

class Home extends Component {

	state = {
		data: {}
	}

	componentDidMount = () => {
		this.updateResult();
		// $('select').selectpicker();
		this.interval = setInterval(() => this.updateResult(), 5000);
	}

	updateResult = () =>{
		axios.get("https://corona.lmao.ninja/all").then((resp) => {
			this.setState({
				data: resp.data
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
							<span className="blink">
								<i class="fa fa-dot-circle-o" aria-hidden="true"></i>
								&nbsp;LIVE
							</span>
							<h3>
								Cases Across The Globe
							</h3>
						</div>
						<div className="card-body">
							<div className="row">
								<div className="col-md-3">
									<Card textColor="" title="Total Cases" count={this.state.data.cases} />
								</div>
								<div className="col-md-3">
									<Card textColor="text-info" title="Active Cases" count={this.state.data.active} />
								</div>
								<div className="col-md-3">
									<Card textColor="text-success" title="Recovered" count={this.state.data.recovered} />
								</div>
								<div className="col-md-3">
									<Card textColor="text-danger" title="Deaths" count={this.state.data.deaths}/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-12 mt-4">
					<Country/>
				</div>
			</div>
		);
	}
}

export default Home;