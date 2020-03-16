import React from 'react';
import ingredientImg from '../../img/ingredients.jpg';
import listImg from '../../img/list.jpg';
import favFoodImg from '../../img/fav-dish.jpg';
import cookingImg from '../../img/cooking3.jpg';
import groceryImg from '../../img/grocery3.jpg';
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
                           <img src={favFoodImg} alt="Favorite salmon dish" />
                        </div>
                        <div className="content">
                           <p>Save all your favorite recipes.</p>
                        </div>
                     </div>
                     <div className="f-box-2 f-box">
                        <div className="icons"><FontAwesomeIcon icon="list" /></div>
                        <div className="img-container">
                           <img src={listImg} alt="Person writing a list of items" />
                        </div>
                        <div className="content">
                           <p>Keep track of your list of recipes.</p>
                        </div>
                     </div>
                     <div className="f-box-3 f-box">
                        <div className="icons"><FontAwesomeIcon icon="tasks" /></div>
                        <div className="img-container">
                           <img src={ingredientImg} alt="Cooking ingredients" />
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
            <div className="c-sides">
               <div className="img-wrapper">
                  <img src={groceryImg} alt="" />
               </div>
               <div className="c-text">
                  <h3>Get prepared.</h3>
               </div>
            </div>
            <div className="c-sides">
               <div className="img-wrapper">
                  <img src={cookingImg} alt="" />
               </div>
               <div className="c-text">
                  <h3>To prepare your meal.</h3>
               </div>
            </div>
         </div>
      </>
   )
}

export default home
