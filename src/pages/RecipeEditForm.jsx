import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RecipeEditForm = ({ recipe, onSave, onCancel }) => {
  const [updatedRecipe, setUpdatedRecipe] = useState({ ...recipe });

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRecipe({ ...updatedRecipe, [name]: value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(updatedRecipe); // Call parent function with updated recipe
  };

  return (
    <div className="container">
      <h3 className="mb-3">Edit Recipe</h3>
      <form onSubmit={handleSubmit}>
        {/* Recipe Name */}
        <div className="mb-3">
          <label className="form-label">Recipe Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={updatedRecipe.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Image URL */}
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            name="image"
            value={updatedRecipe.image}
            onChange={handleChange}
          />
        </div>

        {/* Ingredients */}
        <div className="mb-3">
          <label className="form-label">Ingredients</label>
          <textarea
            className="form-control"
            name="ingredients"
            rows="3"
            value={updatedRecipe.ingredients}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Instructions */}
        <div className="mb-3">
          <label className="form-label">Instructions</label>
          <textarea
            className="form-control"
            name="instructions"
            rows="4"
            value={updatedRecipe.instructions}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary btn-sm">
            💾 Save Changes
          </button>
          <button type="button" className="btn btn-secondary btn-sm" onClick={onCancel}>
            ❌ Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecipeEditForm;