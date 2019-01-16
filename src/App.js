import React, { Component } from 'react';
import './Styling/App.css';
import Ingredients from './Components/Ingredients';
import IngredientsList from './Components/IngredientsList';
import RecipeButton from './Components/RecipeButton';
import RecipeList from './Components/RecipeList';
import { BarLoader } from 'react-spinners';

class App extends Component {

  state = {
    ingredients: [],
    recipes: { recipes: [] },
    loading: false
  }

  render() {
    const { ingredients, recipes, loading } = this.state;

    return (
      < div className="App" >
        <header className="App-header">
          <p>
            <code>Recipe Generator</code>
          </p>
        </header>
        <p>Please enter your ingredients below...</p>

        {loading ? <p>Loading...</p> : <p></p>}
        <Ingredients addIngredient={this.addIngredient} />
        <IngredientsList ingredients={ingredients} />
        <RecipeButton getRecipes={this.getRecipes} />
        <RecipeList recipes={recipes} />

      </div >
    );
  }

  addIngredient = (ingredient) => {
    this.setState(prevState => ({
      ingredients: [...prevState.ingredients, ingredient]
    }))
  }

  getRecipes = (event) => {
    fetch(`https://www.food2fork.com/api/search?key=10e500df959f4637b6a934528d8e8c5a&q=${this.state.ingredients}`)
      .then(response => response.json())
      .then(data => this.setState({ recipes: data, loading: true }))

  }
}


export default App;
