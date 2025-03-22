import React from "react";
import RecipeCard from "../components/RecipeCard";
import { useNavigate } from "react-router-dom";

const sampleRecipes = [
  { id: 1, name: "Pasta", image: "/images/pasta.jpg", likes: 10 },
  { id: 2, name: "Pizza", image: "/images/pizza.jpg", likes: 5 },
  { id: 3, name: "Salad", image: "/images/salad.jpg", likes: 7 },
];

const RecipeList = () => {
  const navigate = useNavigate();

  // Edit function to navigate to edit page
  const handleEdit = (recipe) => {
    navigate(`/edit/${recipe.id}`);
  };

  return (
    <div className="container mt-4">
      <h2>All Recipes</h2>
      <div className="row">
        {sampleRecipes.map((recipe) => (
          <div key={recipe.id} className="col-md-4">
            <RecipeCard recipe={recipe} onEdit={handleEdit} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;