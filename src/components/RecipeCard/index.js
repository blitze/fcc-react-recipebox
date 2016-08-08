import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardActions, CardMedia, CardTitle } from 'material-ui/Card';
import { Row, Col } from 'react-flexbox-grid';
import ContextMenu from '../ContextMenu';
import Likes from '../../containers/Likes';
import './style.scss';

const RecipeCard = (props) => (
	<Card className="card">
		<CardMedia
			overlay={(
				<CardTitle
					title={(
						<Link className="recipe-title" to={`/recipe/${props.id}`}>{props.title}</Link>
					)}
				/>
			)}
		>
			<img src={props.image} />
		</CardMedia>
		<CardActions>
			<Row>
				<Col xs={6}>
					<Likes id={props.id} />
				</Col>
				<Col xs={6}>
					<ContextMenu
						onSelectAction={props.onSelectAction}
						featured={props.featured}
						recipeId={props.id}
					/>
				</Col>
			</Row>
		</CardActions>
	</Card>
);

RecipeCard.propTypes = {
	id: PropTypes.string.isRequired,
	image: PropTypes.string,
	title: PropTypes.string.isRequired,
	featured: PropTypes.bool.isRequired,
	onSelectAction: PropTypes.func.isRequired,
};

export default RecipeCard;