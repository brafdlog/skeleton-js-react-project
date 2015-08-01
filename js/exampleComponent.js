var React = require('react');

var AnotherComponent = require('./anotherComponent');

var ExampleComponent = React.createClass({
	getInitialState: function getInitialState() {
		return {
			something: null
		};
	},
	componentDidMount: function componentDidMount() {

	},
	render: function render() {
		var message = 'Test component';
		return (
			<div className="testComponentWrapper">
				<h1>{message}</h1>
				<AnotherComponent message="I am a sub component"/>
			</div>
		);
	}
});

module.exports = ExampleComponent;
