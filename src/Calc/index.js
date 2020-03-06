import React from 'react';

import './style.css';

class Calc extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			'result': 0,
		}
	}

	static getDerivedStateFromProps(props, state) {
		console.log(props.rate);
		return {rate: props.rate};
	}

	calcRate = (e) => {
		e.preventDefault();

		let elements = e.target.elements;

		let countCurrency = elements['count-currency'].value;
		let typeCurrency = elements['type-currency'].value;

		this.setState({ result: (countCurrency / this.state.rate[typeCurrency]).toFixed(2) });
	}

	render () {
		return (
			<div className="calculator">
				<h1>Выполучите: {this.state.result}</h1>
				<div>
					<form onSubmit={this.calcRate}>
						<input type="number" defaultValue="150" name="count-currency" />
						<select name="type-currency">
							{ Object.keys(this.props.rate).map( (keyName, i) => (
									<option key={keyName} value={keyName}>{keyName}</option>
								)
							) }
						</select>
						<button type="submit" >Расчитать</button>
					</form>
				</div>
			</div>
		);
	};
}

export default Calc;