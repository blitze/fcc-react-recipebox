import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import RecipePage from './containers/RecipePage';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="/recipe/:recipeId" component={RecipePage} />
		<Route path="/about" component={AboutPage} />
		<Route path="*" component={NotFoundPage} />
	</Route>
);