import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Simulated existing recipe data (Replace this with API call later)
  const [recipe, setRecipe] = useState({
    name: "Sample Recipe",
    image: "/images/sample.jpg",
    ingredients: "",
    instructions: "",
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Recipe:", recipe);
    navigate("/"); // Redirect to home after editing
  };

  return (
    <div className="container mt-4">
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Recipe Name</label>
          <input
            type="text"
            className="form-control"
            value={recipe.name}
            onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
            required
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Ingredients</label>
          <textarea
            className="form-control"
            value={recipe.ingredients}
            onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Instructions</label>
          <textarea
            className="form-control"
            value={recipe.instructions}
            onChange={(e) => setRecipe({ ...recipe, instructions: e.target.value })}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
};

export default EditRecipe;