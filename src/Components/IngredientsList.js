import React from 'react';


const IngredientsList = ({ ingredients }) => (
    <ul className="ingredientsList">
        {
            ingredients.map(ingredient => <li className="list">{ingredient}</li>
            )
        }
    </ul>

)


export default IngredientsList;
