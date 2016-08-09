import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createHistory } from 'history';
import { Router, useRouterHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';
import routes from './routes';
require('./favicon.ico'); // Tell webpack to load favicon.ico

// material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// We only do this for the landing page to work on github pages
// otherwise we would use browserHistory
const customHistory = useRouterHistory(createHistory)({
	basename: '/fcc-react-recipebox/'
});

// Create an enhanced history that syncs navigation events with the store
const store = configureStore(customHistory);

const history = syncHistoryWithStore(customHistory, store);

render(
	<Provider store={store}>
		<Router history={history} routes={routes} />
	</Provider>,
	document.getElementById('app')
);