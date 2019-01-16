import React from 'react';

const RecipeList = ({ recipes: { recipes, f2f_url, source_url, publisher, title } }) => (

    < ul className="recipelist" >
        {
            recipes.map(recipe => <li key={recipe.title} className="listRecipe">
                <h1>{recipe.title}</h1>
                <img src={recipe.image_url} alt={`${recipe.title}`} width="400px;" height="300px;" />
                <p><a href={recipe.source_url}>Visit the recipe page!</a></p>
            </li>)
        }
    </ul >
)

export default RecipeList;

                // f2f_url: "http://food2fork.com/view/b318f7"
                // image_url: "http://static.food2fork.com/mustardcreamsalmon169be.jpg"
                // publisher: "Healthy Delicious"
                // publisher_url: "http://www.healthy-delicious.com"
                // recipe_id: "b318f7"
                // social_rank: 98.14069036993975
                // source_url: "http://www.healthy-delicious.com/2013/06/seared-cod-with-mustard-cream-sauce-over-white-beans-and-kale/"
// title: "Seared Cod with Mustard Cream Sauce over White Beans and Kale"