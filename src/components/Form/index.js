import React, { PropTypes } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const Form = (props) => (
	<Row>
		<TextField
			name="title"
			value={props.title}
			className="input-field col s6"
			hintText="Recipe Title"
			fullWidth={true}
			onChange={props.handleTextChange}
			floatingLabelText="Title" /><br />
		<TextField
			name="image"
			value={props.image}
			className="input-field col s6"
			hintText="http://example.com/image.jpg"
			fullWidth={true}
			onChange={props.handleTextChange}
			floatingLabelText="Image" /><br />
		<Col md>
			<SelectField
				value={props.category}
				floatingLabelText="Category"
				floatingLabelFixed={true}
				onChange={props.handleCategoryChange}
				hintText=""
			>
				<MenuItem value="Beverages" primaryText="Beverages" />
				<MenuItem value="Breads" primaryText="Breads" />
				<MenuItem value="Breakfast" primaryText="Breakfast" />
				<MenuItem value="Burgers" primaryText="Burgers" />
				<MenuItem value="Deserts" primaryText="Deserts" />
				<MenuItem value="Lunch" primaryText="Lunch" />
				<MenuItem value="Salads" primaryText="Salads" />
				<MenuItem value="Soups" primaryText="Soups" />
				<MenuItem value="Vegetarian" primaryText="Vegetarian" />
			</SelectField>
		</Col>
		<Col md>
			<SelectField
				value={props.cuisine}
				floatingLabelText="Cuisine"
				floatingLabelFixed={true}
				onChange={props.handleCuisineChange}
				hintText=""
			>
				<MenuItem value="American" primaryText="American" />
				<MenuItem value="Asian" primaryText="Asian" />
				<MenuItem value="French" primaryText="French" />
				<MenuItem value="Italian" primaryText="Italian" />
				<MenuItem value="Mexican" primaryText="Mexican" />
				<MenuItem value="Meditaranian" primaryText="Meditaranian" />
			</SelectField>
		</Col>
		<TextField
			name="description"
			value={props.description}
			className="input-field col s6"
			hintText="Short description"
			floatingLabelText="Description"
			onChange={props.handleTextChange}
			fullWidth={true}
			multiLine={true} rows={3} rowsMax={5} /><br />
		<TextField
			name="ingredients"
			value={props.ingredients}
			className="input-field col s6"
			hintText="Enter one ingredient per line. Use a double dash to start new section titles. (ex. --Section Title)."
			floatingLabelText="Ingredients"
			onChange={props.handleTextChange}
			fullWidth={true}
			multiLine={true} rows={4} rowsMax={10} /><br />
		<TextField
			name="directions"
			value={props.directions}
			className="input-field col s6"
			hintText="Add all of the cooking steps, one per line. You can use a double dash for section titles (ex. --Section Title)."
			floatingLabelText="Directions"
			onChange={props.handleTextChange}
			fullWidth={true}
			multiLine={true} rows={5} rowsMax={15} /><br />
	</Row>
);

Form.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	ingredients: PropTypes.string,
	directions: PropTypes.string,
	cuisine: PropTypes.string,
	category: PropTypes.string,
	handleTextChange: PropTypes.func.isRequired,
	handleCategoryChange: PropTypes.func.isRequired,
	handleCuisineChange: PropTypes.func.isRequired,
};

Form.defaultProps = {
	image: '',
	title: '',
	description: '',
	ingredients: '',
	directions: '',
	cuisine: '',
	category: '',
};

export default Form;