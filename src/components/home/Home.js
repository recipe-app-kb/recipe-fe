import React from 'react';
import ingredientsImg from '../../img/feature-ingredients.jpg';
import notesImg from '../../img/feature-notes.jpg';
import foodImg from '../../img/feature-steak.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function home() {
	return (
		<>
			<div className="main-intro">
				<div className="main-content">
					<div className="grid-text">
						<h1>Recipes</h1>
					</div>
					<div className="grid-sidebar">
						<h2>Keep track of all your favorite recipes</h2>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, cupiditate quaerat. Quibusdam eaque illum eveniet nisi, reprehenderit ea repellat enim est molestiae dolor quod aut amet hic voluptates ab voluptate?</p>
					</div>
					<div className="grid-img">
						Image here
					</div>
				</div>
			</div>
			<div className="featured">
				<div className="container">
					<h2>Everything is more fun with efficiency.</h2>
					<div className="medium-container">
						<div className="f-grid">
							<div className="f-box-1 f-box">
								<div className="icons"><FontAwesomeIcon icon="save" /></div>
								<div className="img-container">
									<img src={foodImg} alt="Favorite salmon dish" />
								</div>
								<div className="content">
									<p>Save all your favorite recipes.</p>
								</div>
							</div>
							<div className="f-box-2 f-box">
								<div className="icons"><FontAwesomeIcon icon="list" /></div>
								<div className="img-container">
									<img src={notesImg} alt="Person writing a list of items" />
								</div>
								<div className="content">
									<p>Keep track of your list of recipes.</p>
								</div>
							</div>
							<div className="f-box-3 f-box">
								<div className="icons"><FontAwesomeIcon icon="tasks" /></div>
								<div className="img-container">
									<img src={ingredientsImg} alt="Cooking ingredients" />
								</div>
								<div className="content">
									<p>See if you have enough ingredients for that reecipe.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="closing">
				<div className="c-sides c-first">
					<div className="c-text">
						<h3>Get prepared.</h3>
					</div>
				</div>
				<div className="c-sides c-last">
					<div className="c-text">
						<h3>To prepare your meal.</h3>
					</div>
				</div>
			</div>
		</>
	)
}

export default home
