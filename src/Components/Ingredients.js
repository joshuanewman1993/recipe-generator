import React from 'react';

class Ingredients extends React.Component {
    state = {
        value: ''
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <label> Ingredient:
                    <input type="text" name="ingredient" value={this.state.value} onChange={this.handleChange} placeholder="Enter ingredient here...">
                    </input>
                </label >
                <button type="submit">Submit</button>

            </form >
        );
    };

    handleChange = (event) => {
        this.setState({ value: event.target.value });

    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addIngredient(this.state.value)
    }
}
export default Ingredients;