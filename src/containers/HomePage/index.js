import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Featured from '../../components/Featured';
import RecipesList from '../../components/RecipesList';
import * as actions from './actions';
import { selectRecipes } from './selectors';

class HomePage extends Component {
	constructor(props) {
		super(props);

		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onSelectAction = this.onSelectAction.bind(this);
		this.onModalConfirm = this.onModalConfirm.bind(this);
		this.onModalSubmit = this.onModalSubmit.bind(this);
	}
	onSelectAction(event, menuItem) {
		const [ mode, id ] = menuItem.props.value.split('-');
		if (id) {
			switch (mode) {
				case 'edit':
					this.props.actions.showForm(id);
				break;
				case 'delete':
					this.props.actions.confirmDelete(id);
				break;
				case 'feature':
					this.props.actions.toggleFeature(id);
				break;
			}
		}
	}
	onModalConfirm() {
		this.props.actions.deleteRecipe(this.props.recipeId);
	}
	onModalSubmit() {
		this.props.actions.submitForm();
	}
	onFormSubmit(recipe) {
		this.props.actions.saveRecipe(recipe);
	}
	render() {
		let featuredRecipes = '',
			containerClass = 'container';

		/**
		 * show featured recipes
		 */
		if (this.props.featured.length) {
			featuredRecipes = (
				<Featured
					featured={this.props.featured}
					onSelectAction={this.onSelectAction}
				/>
			);
		} else {
			containerClass += ' nav-adjustment';
		}

		return (
			<div>
				{featuredRecipes}
				<div className={containerClass}>
					<RecipesList
						recipes={this.props.recipes}
						onSelectAction={this.onSelectAction}
					/>
				</div>
			</div>
		);
	}
}

HomePage.propTypes = {
	featured: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		image: PropTypes.string,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
	})),
	recipes: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		image: PropTypes.string,
		title: PropTypes.string.isRequired,
	})),
	showForm: PropTypes.bool.isRequired,
	submitForm: PropTypes.bool.isRequired,
	confirmDelete: PropTypes.bool.isRequired,
	recipeId: PropTypes.string,
	actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	...selectRecipes(state),
	showForm: state.recipes.showForm,
	submitForm: state.recipes.submitForm,
	confirmDelete: state.recipes.confirmDelete,
	recipeId: state.recipes.recipeId,
});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);