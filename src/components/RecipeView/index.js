import React, { PropTypes } from 'react';
import ListItem from '../../components/ListItem';
import { Row, Col } from 'react-flexbox-grid';
import './styles.scss';

const RecipeView = ({ recipe }) => {
	const getItems = (str, showSteps) => {
		if (!str.length) {
			return '';
		}
		return str.split("\n").map((item, idx) => (
			<ListItem
				key={idx}
				item={item}
				reset={!idx}
				showSteps={showSteps}
			/>
		));
	};
	return (
		<div className="container nav-adjustment">
			<div className="recipe">
				<Row>
					<Col md>
						<img src={recipe.image} />
					</Col>
					<Col md>
						<h2>{recipe.title}</h2>
						<p>{recipe.description}</p>
					</Col>
				</Row>
			</div>
			<Row>
				<Col md>
					<div className="ingredients">
						<h2 className="section-title">Ingredients</h2>
						{getItems(recipe.ingredients, false)}
					</div>
				</Col>
				<Col md>
					<div className="directions">
						<h2 className="section-title">Directions</h2>
						{getItems(recipe.directions, true)}
					</div>
				</Col>
			</Row>
		</div>
	);
};

RecipeView.propTypes = {
	recipe: PropTypes.shape({
		id: PropTypes.string.isRequired,
		image: PropTypes.string,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		directions: PropTypes.string.isRequired,
	}).isRequired
};

export default RecipeView;