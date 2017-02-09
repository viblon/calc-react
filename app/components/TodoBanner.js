var React = require('react');

var TodoBanner = React.createClass({
	render: function(){
		return (
			<h3>Всего задач: {this.props.number}</h3>
		);
	}
});

module.exports = TodoBanner;
