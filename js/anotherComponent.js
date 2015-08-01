var React, AnotherComponent;

React = require('react');
require('../css/anotherComponent.css');

AnotherComponent = React.createClass({
	getInitialState: function getInitialState() {
		return {
			someStateVariable: 'moo foo'
		};
	},
	componentDidMount: function componentDidMount() {

	},
	propTypes: {
		message: React.PropTypes.string.isRequired
	},
	render: function render() {
		return (
			<div className="anotherComponentWrapper">
				<h2>{this.props.message}</h2>
			</div>
		);
	}
});

module.exports = AnotherComponent;
