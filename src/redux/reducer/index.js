import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import userReducer from './userReducer';
import ingredientsReducer from './ingredientsReducer';
import stepsReducer from './stepsReducer';

const reducer = combineReducers({
	userReducer,
	recipesReducer,
	ingredientsReducer,
	stepsReducer
})

export default reducer