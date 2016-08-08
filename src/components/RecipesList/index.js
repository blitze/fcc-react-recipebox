import React, { PropTypes } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import RecipeCard from '../RecipeCard';

const RecipesList = ({ recipes, onSelectAction }) => (
	<Row>
	{recipes.map((recipe, idx) => (
		<Col key={idx} md={4}>
			<RecipeCard {...recipe}
				onSelectAction={onSelectAction}
			/>
		</Col>
	))}
	</Row>
);

RecipesList.propTypes = {
	recipes: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		image: PropTypes.string,
		title: PropTypes.string.isRequired,
	})),
	onSelectAction: PropTypes.func.isRequired,
};

export default RecipesList;