import { TOGGLE_DRAWER } from './constants';

const init = {
	open: false,
	categories: [],
	cuisines: [],
};

export default function navigationReducer(state = init, action) {
	switch (action.type) {
		case TOGGLE_DRAWER:
			return {
				...state,
				open: !state.open
			};
		default: return state;
	}
}