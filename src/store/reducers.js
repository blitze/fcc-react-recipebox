// Set up your root reducer here...
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import recipes from '../containers/HomePage/reducer';
import navigation from '../containers/Navigation/reducer';
import likes from '../containers/Likes/reducer';

const rootReducer = combineReducers({
	recipes,
	likes,
	navigation,
	routing: routerReducer
});

export default rootReducer;