import React from "react";




  
function RecipeView ({index , recipe, deleteRecipe }){

  {console.log(recipe.photo)}
  const handleDeleteClick = () => {
    console.log('view', index);
    deleteRecipe(index);
  };
  
  return (
    <tr>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td>     
      <img 
      src={recipe.photo}
      alt="new"
      />
      </td>
        <td>{recipe.ingredients}</td>       
        <td>{recipe.preparation}</td>
        <td>
        <button name="delete" onClick={handleDeleteClick}>Delete</button>
      </td>
  
    </tr>
   );
}
export default RecipeView;
