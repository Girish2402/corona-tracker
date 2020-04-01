import React, { Component } from 'react';

class Card extends Component {
	render() {
		return (
			<div className={"card bg-light mb-3 " + this.props.textColor} >
				<div className="card-header">{this.props.title}</div>
				<div className="card-body">
					<h5 className="card-title">{this.props.count}</h5>
				</div>
			</div>
		);
	}
}

export default Card;