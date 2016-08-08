import { connect } from 'react-redux';
import RecipeView from '../../components/RecipeView';

const mapStateToProps = (state, ownProps) => ({
	recipe: state.recipes.data[ownProps.params.recipeId]
});

export default connect(mapStateToProps)(RecipeView);