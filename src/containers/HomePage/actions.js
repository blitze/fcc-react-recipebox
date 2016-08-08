import {
	SHOW_FORM,
	SUBMIT_FORM,
	HIDE_MODAL,
	SAVE_RECIPE,
	DELETE_RECIPE,
	CONFIRM_DELETE,
	TOGGLE_FILTER,
	TOGGLE_FEATURE,
	SEARCH_KEYWORD
} from './constants';

export const showForm = (id = '') => ({
	type: SHOW_FORM,
	id
});

export const submitForm = () => ({
	type: SUBMIT_FORM,
});

export const hideModal = () => ({
	type: HIDE_MODAL,
});

export const saveRecipe = recipe => ({
	type: SAVE_RECIPE,
	recipe,
});

export const deleteRecipe = id => ({
	type: DELETE_RECIPE,
	id,
});

export const confirmDelete = id => ({
	type: CONFIRM_DELETE,
	id,
});

export const toggleFilter = (filterType, filterValue) => ({
	type: TOGGLE_FILTER,
	filterType,
	filterValue,
});

export const toggleFeature = id => ({
	type: TOGGLE_FEATURE,
	id,
});

export const searchKeyword = keyword => ({
	type: SEARCH_KEYWORD,
	keyword,
});