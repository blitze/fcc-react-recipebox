import {createStore, applyMiddleware, compose} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import throttle from 'lodash/throttle';
import recipes from './data/recipes';
import { loadState, saveState } from './localStorage';
import rootReducer from './reducers';

const devtools = window.devToolsExtension || (() => f => f);

export default function configureStore(history, initialState) {
	const middlewares = [
		routerMiddleware(history),
	];

	const enhancers = [
		applyMiddleware(...middlewares),
		devtools(),
	];

	const localState = loadState() || recipes;

	const store = createStore(
		rootReducer,
		initialState || localState,
		compose(...enhancers)
	);

	store.subscribe(throttle(() => {
		const state = store.getState();
		saveState({
			recipes: state.recipes,
			likes: state.likes
		});
	}, 1000));

	if (module.hot && process.env.NODE_ENV !== 'production') {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('./reducers', () => {
			const nextReducer = require('./reducers'); // eslint-disable-line global-require
			store.replaceReducer(nextReducer);
		});
	}
	
	return store;
}
