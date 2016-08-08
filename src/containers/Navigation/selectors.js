import { createSelector } from 'reselect';

const selectRecipesData = (state) => state.recipes.data;

export const selectFilters = createSelector(
	[selectRecipesData],
	(recipesData) => {
		const list = Object.keys(recipesData).reduce((filters, id) => {
			const category = recipesData[id].category;
			const cuisine = recipesData[id].cuisine;

			if (filters.categories.indexOf(category) < 0) {
				filters.categories.push(category);
			}

			if (filters.cuisines.indexOf(cuisine) < 0) {
				filters.cuisines.push(cuisine);
			}

			return filters;
		}, {
			categories: [],
			cuisines: []
		});
		
		list.categories.sort();
		list.cuisines.sort();

		return list;
	}
);