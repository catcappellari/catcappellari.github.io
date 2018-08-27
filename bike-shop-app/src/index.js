import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Ticket extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ticketStatus: "open",
			issue: ""
		}
		// this.updateStatus = this.updateStatus.bind(this);
		// this.handler = this.handler.bind(this);
		this.handler = this.handler.bind(this);
		this.updateStatus = this.updateStatus.bind(this);
	}

	updateStatus(e) {
		e.preventDefault();
		console.log(e.target.value);
		this.setState({
			ticketStatus: e.target.value		
		})
	}

	handler(e) {
		this.setState({
			issue: e.target.value
		})
	}

	render() {
		let className = 'ticket-status js-ticket-status ';
		className += this.state.ticketStatus;
		
		return (
			<div className="customer-card">
				<h1 className="customer-ticket"><strong>{this.props.ticket}</strong> - {this.state.ticketStatus}</h1>
				<ul className={className}>
					<li><button className="status-button status-button_open" value="open" onClick={this.updateStatus}>Open</button></li>
					<li><button className="status-button status-button_pending" value="pending" onClick={this.updateStatus}>Pending</button></li>
					<li><button className="status-button status-button_closed" value="closed" onClick={this.updateStatus}>Closed</button></li>
				</ul>
				<h2 className="customer-name">{this.props.name}</h2>
				<hr />
				<h3 className="customer-bike">{this.props.bike}, {this.props.color}</h3>
				<h4>Work Items:</h4>
				<form className="customer-issue">
					<textarea
						onChange={this.handler}
						value={this.state.issue}
						placeholder="Reason for service..."/>
				</form>

			</div>
		);
	}
}

ReactDOM.render(
	<Ticket ticket="001" name="Cat" bike="Surly Long Haul Trucker" color="maroon" issue="not shifting properly" />,
	document.getElementById('root')
);
