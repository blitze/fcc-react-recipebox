import { TOGGLE_LIKE } from './constants';

const init = {
	recipes: {},
	voted: [],
};

export default function likesReducer(state = init, action) {
	switch (action.type) {
		case TOGGLE_LIKE: {
			const index = state.voted.indexOf(action.id);

			// user has not voted for this recipe, so add their vote
			if (index < 0) {
				return {
					...state,
					recipes: {
						...state.recipes,
						[action.id]: state.recipes[action.id] ? state.recipes[action.id] + 1 : 1,
					},
					voted: [
						...state.voted,
						action.id
					]
				};
			
			// user has voted, so remove the vote
			} else {
				const likes = state.recipes[action.id];
				let recipes = Object.assign({}, state.recipes);

				if (likes) {
					recipes = {
						...state.recipes,
						[action.id]: likes - 1,
					};
				} else {
					delete recipes[action.id];
				}

				return {
					...state,
					recipes,
					voted: [
						...state.voted.slice(0, index),
						...state.voted.slice(index + 1),
					]
				};
			}
		}
		default: return state;
	}
}