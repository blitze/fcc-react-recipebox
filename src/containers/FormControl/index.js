import React, { Component, PropTypes } from 'react';
import Form from '../../components/Form';

class FormControl extends Component {
	constructor(props) {
		super(props);

		this.state = props.recipe;

		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.handleCuisineChange = this.handleCuisineChange.bind(this);
	}
	componentDidUpdate() {
		if (this.props.submitForm) {
			this.props.onSubmit(this.state);
		}
	}
	handleTextChange(event) {
		let data = {};
		const field = event.target.name;
		data[field] = event.target.value;
		this.setState(data);
	}
	handleCategoryChange(event, index, value) {
		this.setState({category: value});
	}
	handleCuisineChange(event, index, value) {
		this.setState({cuisine: value});
	}
	render() {
		return (
			<Form {...this.state}
				handleTextChange={this.handleTextChange}
				handleCategoryChange={this.handleCategoryChange}
				handleCuisineChange={this.handleCuisineChange}
			/>
		);
	}
}

FormControl.propTypes = {
	recipe: PropTypes.shape({
		id: PropTypes.string,
		image: PropTypes.string,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		directions: PropTypes.string.isRequired,
		cuisine: PropTypes.string.isRequired,
		category: PropTypes.string.isRequired,
	}),
	submitForm: PropTypes.bool.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default FormControl;