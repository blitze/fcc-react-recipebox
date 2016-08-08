import { TOGGLE_LIKE } from './constants';

export const toggleLike = id => ({
	type: TOGGLE_LIKE,
	id,
});