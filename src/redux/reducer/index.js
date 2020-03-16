import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import userReducer from './userReducer';
import ingredientsReducer from './ingredientsReducer';

const reducer = combineReducers({
	userReducer,
	recipesReducer,
	ingredientsReducer
})

export default reducer