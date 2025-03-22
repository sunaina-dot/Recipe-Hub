import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const RecipeCard = ({ recipe, onEdit }) => {
  const [likes, setLikes] = useState(recipe.likes || 0);

  // Handle Like Button
  const handleLike = () => {
    setLikes(likes + 1); // Later, connect this to a backend
  };

  return (
    <div className="card shadow-sm">
      <img src={recipe.image} className="card-img-top" alt={recipe.name} />
      <div className="card-body">
        <h5 className="card-title">{recipe.name}</h5>
        
        {/* Buttons with smaller size */}
        <div className="d-flex justify-content-between">
          <button className="btn btn-success btn-sm" onClick={handleLike}>
            👍 Like ({likes})
          </button>
          
          <Link to={`/recipe/${recipe.id}`} className="btn btn-primary btn-sm">
            👀 View
          </Link>

          <button className="btn btn-warning btn-sm" onClick={() => onEdit(recipe)}>
            ✏️ Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;