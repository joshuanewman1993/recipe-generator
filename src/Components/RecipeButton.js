
import React from 'react';

const RecipeButton = ({ getRecipes }) => {
    return (
        <button className="recipeButton" onClick={getRecipes}> Generate Recipes</button >

    );
};

export default RecipeButton;