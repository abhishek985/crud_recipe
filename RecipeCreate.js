import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  
  const handleNameChange = (event) => setName(event.target.value);
  const handleCuisineChange = (event) => setCuisine(event.target.value);
  const handlePhotoChange = (event) => setPhoto(event.target.value);
  const handleIngredientsChange = (event) => setIngredients(event.target.value);
  const handlePreparationChange = (event) => setPreparation(event.target.value);
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {
      name,
      cuisine,
      photo,
      ingredients,
      preparation,
    };
    createRecipe(newRecipe);
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                    id="name"
                    type="name"
                    name="name"
                    onChange={handleNameChange}
                    placeholder="Name"
                    value={name}
                />
              </label> 
            </td>
            <td>
              <label htmlFor="Cuisine">
                <input
                    id="cuisine"
                    type="cuisine"
                    name="cuisine"
                    onChange={handleCuisineChange}
                    placeholder="Cuisine"
                    value={cuisine}
                />
              </label> 
            </td>
            <td>
              <label htmlFor="photo">
                <input
                    id="photo"
                    type="photo"
                    name="photo"                   
                    onChange={handlePhotoChange}
                    placeholder="URL"
                    value={photo}
                />
              </label> 
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea
                    id="ingredients"
                    type="ingredients"
                    name="ingredients"                   
                    onChange={handleIngredientsChange}
                    placeholder="Ingredients"
                    value={ingredients}
                />
              </label> 
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea
                    id="preparation"
                    type="preparation"
                    name="preparation"                   
                    onChange={handlePreparationChange}
                    placeholder="Preparation"
                    value={preparation}
                />
              </label> 
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
