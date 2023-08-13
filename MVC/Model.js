//Storing the data
export const anotherRecipeObj ={
    recipeObj:{}
}
import { getJSON } from "../Config/config.js";
import { API_URL } from "../Helper/helpers.js";

export async function storeData(id){
//const result = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id.slice(1)}`) //To remove the hash
// const result =   await fetch(`${API_URL}/${id.slice(1)}`)
//     .then(response => response.json())
const result = await getJSON(`${API_URL}/${id.slice(1)}`)
    .then(result => result.data.recipe)
    .catch(err => alert(err))

    // console.log(result);
    anotherRecipeObj.recipeObj = {
        publisherRT : result.publisher,
        titleRT : result.title,
        IMGURL : result.image_url,
        servingsRT : result.servings,
        cookingTimeRT: result.cooking_time,
        ingredientsRT : result.ingredients
    }
    console.log(anotherRecipeObj);
}

export const allData={
    allRecipeData : []
}

export async function getData(searchItem){
    const RecipesArray = await getJSON(`${API_URL}?search=${searchItem}&key=365461f3-3cd9-4e87-a14f-3e87cd8f95a1`)
        .then(Recipes => Recipes.data.recipes)
        .catch(err => console.log(err));

        allData.allRecipeData = RecipesArray;
        
}