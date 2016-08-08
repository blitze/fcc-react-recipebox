import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import autoPlay from 'react-swipeable-views/lib/autoPlay';
import SwipeableViews from 'react-swipeable-views';
import ContextMenu from '../ContextMenu';
import Likes from '../../containers/Likes';
import './styles.scss';
 
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
	slideContainer: {
		height: 'auto',
	},
};

const FeaturedRecipes = ({ featured, onSelectAction }) => (
	<div className="slideshow">
		<AutoPlaySwipeableViews
			interval={20000}
			containerStyle={styles.slideContainer}
		>
			{featured.map((recipe, idx) => (
				<div key={idx} className="slide" style={{backgroundImage: `url('${recipe.image}')`}}>
					<div className="container">
						<div className="inner">
							<div className="caption">
								<Link className="title" title={recipe.title} to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
								<p>{recipe.description}</p>
							</div>
							<div className="likes"><Likes id={recipe.id} /></div>
						</div>
					</div>
					<div className="actions">
						<ContextMenu
							onSelectAction={onSelectAction}
							featured={true}
							recipeId={recipe.id}
						/>
					</div>
				</div>
			))}
		</AutoPlaySwipeableViews>
	</div>
);

FeaturedRecipes.propTypes = {
	featured: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		image: PropTypes.string,
		title: PropTypes.string.isRequired,
	})),
	onSelectAction: PropTypes.func.isRequired,
};

export default FeaturedRecipes;