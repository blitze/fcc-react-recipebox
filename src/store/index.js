import throttle from 'lodash/throttle';
import recipes from './data/recipes';
import { loadState, saveState } from './localStorage';

let redux;
if (process.env.NODE_ENV === 'production') {
	redux = require('./configureStore.prod');
} else {
	redux = require('./configureStore.dev');
}

const localState = loadState();
const store = redux.configureStore(localState || recipes);

store.subscribe(throttle(() => {
	const state = store.getState();
	saveState({
		recipes: state.recipes,
		likes: state.likes
	});
}, 1000));

export default store;
