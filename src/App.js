import React from 'react';
// import './styles/app.scss';
import { Route } from 'react-router-dom';

// Components
import Home from './components/home/Home';
import RecipeList from './components/recipe/RecipeList';
import EditRecipe from './components/edit/EditRecipe';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Login from './components/forms/Login';
import Register from './components/forms/Register';
import PrivateRoute from './protected/PrivateRoute';
import AddRecipe from './components/recipe/AddRecipe';
import RecipeDetails from './components/recipe/RecipeDetails';
import AddSteps from './components/recipe/AddSteps';

// Fontawesome icon library
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSave, faList, faTasks } from '@fortawesome/free-solid-svg-icons';
import AddIngredients from './components/recipe/AddIngredients';

library.add(fab, faSave, faList, faTasks);

function App() {

	return (
		<div className="App">
			<Header />
			<Route exact path='/' component={Home} />
			<Route path='/login' component={Login} />
			<PrivateRoute path='/recipes' component={RecipeList} />
			<Route path='/edit' component={EditRecipe} />
			<Route path='/register' component={Register} />
			<Route path='/add-recipe' component={AddRecipe} />
			<PrivateRoute path='/recipe/:id/details' component={RecipeDetails} />
			<PrivateRoute path='/add-ingredients' component={AddIngredients} />
			<PrivateRoute path='/add-steps' component={AddSteps} />
			<Footer />
		</div>
	)
}

export default App;
