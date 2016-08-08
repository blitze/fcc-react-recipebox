import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Modal from '../../components/Modal';
import FormControl from '../FormControl';
import * as actions from '../HomePage/actions';

class Crud extends Component {
	constructor(props) {
		super(props);

		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onModalConfirm = this.onModalConfirm.bind(this);
		this.onModalSubmit = this.onModalSubmit.bind(this);
	}
	onModalConfirm() {
		this.props.actions.deleteRecipe(this.props.recipeId);
		browserHistory.push("/");
	}
	onModalSubmit() {
		this.props.actions.submitForm();
	}
	onFormSubmit(recipe) {
		// go to homepage if we're adding new
		if (!recipe.id) {
			browserHistory.push("/");
		}

		this.props.actions.saveRecipe(recipe);
	}
	render() {
		/**
		 * Show add/edit form
		 */
		if (this.props.showForm) {
			return (
				<Modal
					handleClose={this.props.actions.hideModal}
					handleSubmit={this.onModalSubmit}
					title={this.props.recipe !== undefined ? 'Edit Recipe' : 'Add Recipe'}
					open={this.props.showForm}
					submitBtnLabel="Save"
					className="s12"
				>
					<FormControl
						recipe={this.props.recipe}
						submitForm={this.props.submitForm}
						onSubmit={this.onFormSubmit}
					/>
				</Modal>
			);

		/**
		 * show confirm delete modal
		 */
		} else if (this.props.confirmDelete && this.props.recipeId) {
			return (
				<Modal
					handleClose={this.props.actions.hideModal}
					handleSubmit={this.onModalConfirm}
					title="Confirm Delete"
					open={this.props.confirmDelete}
					submitBtnLabel="Confirm"
				>
					<p>Are you sure you want to delete this recipe?</p>
					<i>{this.props.recipe.title}</i>
				</Modal>
			);
		} else {
			return null;
		}
	}
}

Crud.propTypes = {
	showForm: PropTypes.bool.isRequired,
	submitForm: PropTypes.bool.isRequired,
	confirmDelete: PropTypes.bool.isRequired,
	recipeId: PropTypes.string,
	recipe: PropTypes.object,
	actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	recipe: state.recipes.data[state.recipes.recipeId],
	showForm: state.recipes.showForm,
	submitForm: state.recipes.submitForm,
	confirmDelete: state.recipes.confirmDelete,
	recipeId: state.recipes.recipeId,
});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Crud);