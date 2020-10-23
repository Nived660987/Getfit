import React, { Component } from 'react';
import '../Diet/Diet.css';
import Button from '@material-ui/core/Button';
import Typography from '../components/Typography';
import Underweight from '../Diet/Underweight';
import Overweight from '../Diet/Overweight';

class Diet extends Component {
	constructor(props) {
		super(props);
		this.bmiCalc = this.bmiCalc.bind(this);
		this.state = {
			weight: 'initial weight',
			height: 'initial height',
		};
	}

	bmiCalc() {
		const bmi = Math.round((this.state.weight / (this.state.height * this.state.height)) * 10000 * 10) / 10;

		if (bmi < 18.5) {
			this.setState({ judge: 'Underweight' });
		} else if (bmi < 24.9) {
			this.setState({ judge: 'Normal weight' });
		} else if (bmi < 30) {
			this.setState({ judge: 'Overweight' });
		} else {
			this.setState({ judge: 'Obesity' });
		}

		this.setState({ bmi: bmi });

		if (!bmi) {
			alert('ERROR!!');
			this.setState({
				bmi: '',
				judge: '',
			});
		}
	}

	reset() {
		this.setState({
			weight: 'initial weight',
			height: 'initial height',
			bmi: '',
			judge: '',
		});
	}

	setWeight(e) {
		this.setState({ weight: e.target.value });
	}
	setHeight(e) {
		this.setState({ height: e.target.value });
	}
	display=()=>{
	if(this.state.judge =='Underweight')
		return <Underweight/>;
	else if(this.state.judge=='Overweight')
		return <Overweight/>;
	}
	render() {
		return (
			<div className="Diet">
				<div className="Diet-header">
					<h1 className="display-4">Choose your diet plans,</h1>
					<p className="lead">Calculate your BMI, in-order to check your Health Status.</p>
				</div>
				<table>
					<tr>
						<td>
							<ul>
								<input
									className="Dinput"
									type="number"
									placeholder="Weight in [kg]"
									value={this.state.weight}
									onChange={this.setWeight.bind(this)}
								/>
							</ul>
							<ul>
								<input
									className="Dinput"
									type="number"
									placeholder="Height in [cm]"
									value={this.state.height}
									onChange={this.setHeight.bind(this)}
								/>
							</ul>

							<ul>
								<button onClick={this.bmiCalc.bind(this)} className="dbutton">
									Calculate
								</button>
							</ul>
							<ul>
								<button onClick={this.reset.bind(this)} className="dbutton">
									Reset
								</button>
							</ul>

							<ul>
								<span className="response">BMI: {this.state.bmi} </span>
							</ul>
							<ul>
								<span className="response">Judge: {this.state.judge} </span>
							</ul>
						</td>
					</tr>
				</table>
				<div className="main-footer">
					<div className="container">
						<div className="content-wrap">
							<h2>Diet Plan according to your weight!!</h2>
							<div className="row">
								<div className="col">
									<h1>Principles of Diet Planning</h1>
									<h2>
										Here are six principles we believe are important to incorporate into a diet
										plan:
									</h2>

									<li>
										Maintaining adequate levels of energy, nutrients, movement and rest for optimal
										health.
									</li>
									<li>
										Balancing different food groups, and consuming foods in the right proportion
									</li>
									<li>
										Consuming the appropriate number of calories to maintain a healthy weight
										depending on your metabolism and exercise levels
									</li>
									<li>
										Focussing on creating a diet that is nutrient dense without being high in
										calories
									</li>
									<li>Learning how to be moderate with foods that are higher in fat or sugar</li>
									<li>
										Exploring a varied diet that provides all the nutrients necessary for good
										health
									</li>

									<main>
										{this.display()}
									</main>

									<a href="/category/Food">
										<button className="Foodbutton" href="/Food">
											Checkout Food Recipe
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Diet;
