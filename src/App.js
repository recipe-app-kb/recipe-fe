import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Home from './components/home/Home';
import RecipeList from './components/recipe/RecipeList';
import EditRecipe from './components/edits/EditRecipe';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Login from './components/forms/Login';
import Register from './components/forms/Register';
import PrivateRoute from './protected/PrivateRoute';
import AddRecipe from './components/recipe/AddRecipe';
import RecipeDetails from './components/recipe/RecipeDetails';

// Fontawesome icon library
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSave, faList, faTasks, faTimes, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';
import NotFoundPage from './components/NotFoundPage';

library.add(fab, faSave, faList, faTasks, faTimes, faEdit, faCheck);

function App() {

	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/login' component={Login} />
				<PrivateRoute path='/recipes' component={RecipeList} />
				<Route path='/register' component={Register} />
				<Route path='/add-recipe' component={AddRecipe} />
				<PrivateRoute path='/recipe/:id/details' component={RecipeDetails} />
				<PrivateRoute path='/recipe/:id/edit' component={EditRecipe} />
				<Route component={NotFoundPage} />
			</Switch>

			<Footer />
		</div>
	)
}

export default App;
