import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Modal from '../../components/Modal';
import FormControl from '../FormControl';
import { saveRecipe, deleteRecipe, submitForm, hideModal } from '../HomePage/actions';

const Crud = (props) => {
	/**
	 * Show add/edit form
	 */
	if (props.showForm) {
		return (
			<Modal
				handleClose={props.onHideModal}
				handleSubmit={props.onModalSubmit}
				title={props.recipe !== undefined ? 'Edit Recipe' : 'Add Recipe'}
				open={props.showForm}
				submitBtnLabel="Save"
				className="s12"
			>
				<FormControl
					recipe={props.recipe}
					submitForm={props.submitForm}
					onSubmit={props.onFormSubmit}
				/>
			</Modal>
		);

	/**
	 * show confirm delete modal
	 */
	} else if (props.confirmDelete && props.recipeId) {
		return (
			<Modal
				handleClose={props.onHideModal}
				handleSubmit={props.onModalConfirm(props.recipeId)}
				title="Confirm Delete"
				open={props.confirmDelete}
				submitBtnLabel="Confirm"
			>
				<p>Are you sure you want to delete this recipe?</p>
				<i>{props.recipe.title}</i>
			</Modal>
		);
	} else {
		return null;
	}
};

Crud.propTypes = {
	showForm: PropTypes.bool.isRequired,
	submitForm: PropTypes.bool.isRequired,
	confirmDelete: PropTypes.bool.isRequired,
	recipeId: PropTypes.string,
	recipe: PropTypes.object,
	onModalConfirm: PropTypes.func.isRequired,
	onModalSubmit: PropTypes.func.isRequired,
	onFormSubmit: PropTypes.func.isRequired,
	onHideModal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	recipe: state.recipes.data[state.recipes.recipeId],
	showForm: state.recipes.showForm,
	submitForm: state.recipes.submitForm,
	confirmDelete: state.recipes.confirmDelete,
	recipeId: state.recipes.recipeId,
});

const mapDispatchToProps = (dispatch) => ({
	onModalConfirm: (id) => () => {
		dispatch(deleteRecipe(id));
		dispatch(push("/"));
	},
	onModalSubmit: () => dispatch(submitForm()),
	onHideModal: () => dispatch(hideModal()),
	onFormSubmit: (recipe) => {
		// go to homepage if we're adding new
		if (!recipe.id) {
			dispatch(push("/"));
		}

		dispatch(saveRecipe(recipe));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Crud);