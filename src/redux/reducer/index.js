import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import userReducer from './userReducer';
import ingredientsReducer from './ingredientsReducer';
import stepReducer from './stepsReducer';

const reducer = combineReducers({
	userReducer,
	recipesReducer,
	ingredientsReducer,
	stepReducer
})

export default reducer