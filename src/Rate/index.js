import React from 'react';
import './style.css';

import Calc from "../Calc";

class Rate extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			'currencyRate' : {} 
		}

		this.currency = ['USD', 'RUB', 'CAD', 'PHP'];

		this.getRate();
	}

	getRate = () => {
		fetch('https://api.exchangeratesapi.io/latest')
			.then(data => { 
				return data.json() 
			})
			.then(data => {

				let result = {};
				for (let i = 0; i < this.currency.length; i++) {
					result[this.currency[i]] = data.rates[this.currency[i]];
				}

				this.setState({ currencyRate: result });
			});
	}

	render(){
		return (
			<div>
				<Calc rate={this.state.currencyRate}/>
				<div className="flex-container">
				{ Object.keys(this.state.currencyRate).map( (keyName, i) => (
						<div className="block flex-item" key={keyName}>
							<div className="currency-name">{ keyName }</div>
							<div className="currency-in">{ this.state.currencyRate[keyName].toFixed(2)}</div>
						</div>
					)
				) }
				</div>
				
			</div>
		);
	}
}

export default Rate;