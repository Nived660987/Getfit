import React, { useState } from 'react';
import RecipeDetails from '../Recipe/RecipeDetails';
import "./recipe.css";
const Recipe = ({ recipe }) => {
	const [show, setShow] = useState(false);

	const { label, image, url, ingredients } = recipe.recipe;
	return (
		<div className="recipe">
			<h2>{label}</h2>
			<img src={image} alt={label} />
			<a href={url} target="_blank" rel="noopener noreferrer">
				Recipe
			</a>
			<br/>
			<button onClick={() => setShow(!show)}>ingredients</button>
			{show && <RecipeDetails ingredients={ingredients} />}
		</div>
	);
};

export default Recipe;
