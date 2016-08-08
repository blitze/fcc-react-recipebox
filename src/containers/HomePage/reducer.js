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
import shortid from 'shortid';

const init = {
	showForm: false,
	submitForm: false,
	confirmDelete: false,
	recipeId: '',
	keyword: '',
	categoryFilter: [],
	cuisineFilter: [],
	data: {},
};

const updateFilter = (filterList = [], filter) => {
	const index = filterList.indexOf(filter);
	if (index < 0) {
		return [
			...filterList,
			filter,
		];
	} else {
		return [
			...filterList.slice(0, index),
			...filterList.slice(index + 1),
		];
	}
};

export default function homeReducer(state = init, action) {
	switch (action.type) {
		case SHOW_FORM:
			return {
				...state,
				showForm: true,
				submitForm: false,
				recipeId: action.id
			};
		case HIDE_MODAL:
			return {
				...state,
				showForm: false,
				confirmDelete: false,
				recipeId: '',
			};
		case SUBMIT_FORM:
			return {
				...state,
				submitForm: true,
			};
		case SAVE_RECIPE:
			if (!action.recipe.id) {
				shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
				action.recipe.id = shortid.generate();
				action.recipe.featured = false;
			}
			return {
				...init,
				data: {
					...state.data,
					[action.recipe.id]: action.recipe
				}
			};
		case DELETE_RECIPE: {
			let data = Object.assign({}, state.data);
			delete data[action.id];
			return {
				...init,
				data
			};
		}
		case CONFIRM_DELETE:
			return {
				...state,
				confirmDelete: true,
				recipeId: action.id
			};
		case TOGGLE_FILTER: {
			const filter = `${action.filterType}Filter`;
			return {
				...state,
				[filter]: updateFilter(state[filter], action.filterValue)  
			};
		}
		case TOGGLE_FEATURE: {
			return {
				...state,
				data: {
					...state.data,
					[action.id]: {
						...state.data[action.id],
						featured: !state.data[action.id].featured,
					}
				}
			};
		}
		case SEARCH_KEYWORD:
			return {
				...state,
				keyword: action.keyword
			};
		default:
			return state;
	}
}