import React, { Component } from 'react';
import axios from 'axios'
import Card from './card'
// import $ from 'jquery'
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

class Country extends Component {
	state = {
		data: {}
	}

	componentDidMount = () => {
		this.updateResult('IN');
	}
	
	updateResult = (countryCode) => {
		axios.get(`https://corona.lmao.ninja/countries/${countryCode}`).then((resp) => {
			this.setState({
				data: resp.data
			})
		})
	}

	onSelectFlag = (countryCode) => {
		this.updateResult(countryCode);
	}

	render() {
		return (
			<div className="card text-center">
				<div className="card-header">
					<h3>Result Country Wise</h3>
				</div>
				<div className="card-body">
					<div className="row">
						<div className="col mt-3">
							<div className="card bg-white mb-3 ">
								<div className="card-body">
									<ReactFlagsSelect defaultCountry="IN" onSelect={this.onSelectFlag} searchable={true}/>
								</div>
							</div>
						</div>
						<div className="col">
							<Card textColor="" title="Total Cases" count={this.state.data.cases} />
						</div>
						<div className="col">
							<Card textColor="text-info" title="Active Cases" count={this.state.data.active} />
						</div>
						<div className="col">
							<Card textColor="text-success" title="Recovered" count={this.state.data.recovered} />
						</div>
						<div className="col">
							<Card textColor="text-danger" title="Deaths" count={this.state.data.deaths} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Country;