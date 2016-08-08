// this implementation is taken directly from the egghead tutorial by Dan Abramov (the creator of redux)

const localStorageKey = 'recipeBox';

export const loadState = () => {
	try {
		const serializedState = localStorage.getItem(localStorageKey);
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem(localStorageKey, serializedState);
	} catch (err) {
		console.log("Cannot write to localStorage");  // eslint-disable-line
	}
};