import React from 'react';
import { Button } from 'reactstrap';

const IngredientsList = (props) => {
    const { isFetching, filteredIngredients, addIngredientToRecipe } = props;

    return (
        <>
            {isFetching && (<p>Loading ingredients...</p>)}
            <ul>
                {!isFetching && filteredIngredients.map(ingredient => (
                    <li key={ingredient.id}>{ingredient.name}<Button color="primary" onClick={() => addIngredientToRecipe(ingredient)}>Add</Button></li>
                ))}
            </ul>
        </>
    )
}

export default IngredientsList;