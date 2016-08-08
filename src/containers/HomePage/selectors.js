import { createSelector } from 'reselect';

const selectRecipesData = (state) => state.recipes.data;
const selectCategoryFilter = (state) => state.recipes.categoryFilter;
const selectCuisineFilter = (state) => state.recipes.cuisineFilter;
const selectKeyword = (state) => state.recipes.keyword;

const filterRecipes = createSelector(
	[selectKeyword, selectRecipesData, selectCategoryFilter, selectCuisineFilter],

	(keyword, recipesData, categoryFilter, cuisineFilter) => {

		const hasFilter = (categoryFilter.length || cuisineFilter.length);

		return Object.keys(recipesData).reduce(function(items, recipeId) {

			const type = (recipesData[recipeId].featured && !hasFilter && !keyword.length) ? 'featured' : 'recipes';
			const recipe = recipesData[recipeId];

			if (!hasFilter ||
				categoryFilter.indexOf(recipe.category) > -1 ||
				cuisineFilter.indexOf(recipe.cuisine) > -1
			) {
				items[type].push(recipe);
			}
			return items;
		}, {
			recipes: [],
			featured: []
		});
	}
);

export const selectRecipes = createSelector(
	[selectKeyword, filterRecipes],
	(keyword, filtered) => {
		if (keyword.length < 3) {
			return filtered;
		}
		const pattern = new RegExp(keyword, 'i');
		filtered.recipes = filtered.recipes.filter(recipe => {
			return pattern.test(recipe.title);
		});
		return filtered;
	}
);