import React from 'react';
import { Button } from 'reactstrap';

const AddedIngredientsList = (props) => {
    const { addedIngredients, handleRemove, recipe } = props;

    return (
        <div>
            {addedIngredients.length > 0 ?
                (<div className="recipe-ingredients wrapper">
                    {addedIngredients.map(ingredient => (
                        <div className="ingredient-item clearfix" key={ingredient.id}>{ingredient.name} <Button color="danger" size="sm" onClick={() => handleRemove(ingredient.ingredient_id, recipe.id)}>Remove</Button></div>
                    ))}
                </div>) : (<p>No ingredients added yet.</p>)
            }
        </div>
    )
}

export default AddedIngredientsList;