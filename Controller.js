//"https://forkify-api.herokuapp.com/v2"   ---> API without access key
//https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key>   with key and that we need
// Access Key -------> 365461f3-3cd9-4e87-a14f-3e87cd8f95a1
// https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=365461f3-3cd9-4e87-a14f-3e87cd8f95a1

const searchItem = document.querySelector('input');
const searchbtn = document.getElementById('search-btn');
// const leftContainer = document.getElementById('left-container');
import { storeData } from "./MVC/Model.js";
import { View } from "./MVC/View.js";
import { API_URL } from "./Helper/helpers.js";
import { getJSON } from "./Config/config.js";
import { getData } from "./MVC/Model.js";
import { AllRecipeView } from "./MVC/AllRecipeView.js";
async function getRecipes() {
    
//const RecipesArray = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchItem.value}&key=365461f3-3cd9-4e87-a14f-3e87cd8f95a1`)
// const RecipesArray = await fetch(`${API_URL}?search=${searchItem.value}&key=365461f3-3cd9-4e87-a14f-3e87cd8f95a1`)    
//         .then(data => data.json())
// const RecipesArray = await getJSON(`${API_URL}?search=${searchItem.value}&key=365461f3-3cd9-4e87-a14f-3e87cd8f95a1`)
//             .then(Recipes => Recipes.data.recipes)
//             .catch(err => console.log(err));
    await getData(searchItem.value)
    const arv = new AllRecipeView();
    arv.render();
    // RecipesArray.map(function (i) {
    //     // console.log(i);
    //     const publisher = i.publisher;
    //     const title = i.title;
    //     const imgurl = i.image_url;
    //     const ID = i.id;
    //     // console.log(ID);  We provide #ID below on clicking for connect it with right container and display the data 
    //     return leftContainer.insertAdjacentHTML("afterbegin", `
    //     <a href="#${ID}">   
    //     <div class="left-food-container">
    //     <img src="${imgurl}" id="imgurl">
    //     <h1 id="publisher">${publisher}</h1>
    //     <h1 id="title">${title}</h1>
    // </div>
    // </a>
    // `)
    // })
}
searchbtn.addEventListener('click', function () {
    getRecipes()
});

// const rightContainer = document.getElementById('right-container');
const RTdetails = document.querySelector('.detailRT-container');
//https://forkify-api.herokuapp.com/api/v2/recipes/:id
//https://forkify-api.herokuapp.com/api/v2/recipes/:5ed6604591c37cdc054bcd5a   ----> with id for one item

async function loadParticularRecipe(){
    //Write logic to receive the #ID

    const HashID = window.location.hash;
    // const result = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${HashID.slice(1)}`) //To remove the hash
    // .then(response => response.json())
    // .then(result => result.data.recipe)
    // .catch(err => alert(err))

    // console.log(result);
    // const recipeObj = {
    //     publisherRT : result.publisher,
    //     titleRT : result.title,
    //     IMGURL : result.image_url,
    //     servingsRT : result.servings,
    //     cookingTimeRT: result.cooking_time,
    //     ingredientsRT : result.ingredients
    // }
    // Here ALL Above data is MODEL
    await storeData(HashID);
    // RTdetails.innerText = "";


    const rv = new View();
    rv.render();
    // const src = recipeObj.IMGURL;
    // console.log(src)
    // console.log(recipeObj)
    //All the things we have to kept in View.js because it is related to display
    // const html1 =
    // `
    // <div class="right-food-container">
    //             <img class="right-image" src="${recipeObj.IMGURL}">
    //             <h2 class="right-title">${recipeObj.titleRT}</h2>
    //             <h3 class="right-publisher">${recipeObj.publisherRT}</h3>
    //             <h3 class="right-servings">${recipeObj.servingsRT}</h3>
    //             <h3 class="right-cooking-time">${recipeObj.cookingTimeRT}</h3>

    //             <div class="ingredients"
    //             ${recipeObj.ingredientsRT.map((i)=>{
    //                 return `<div>
    //                 <h2 class="right-ingredients-span">${i.description}</span> -- 
    //                 <span class="right-ingredients-span">${i.quantity}</span> 
    //                 <span class="right-ingredients-span">${i.unit}</span>
    //                 </div>
    //                 `
    //             }).join("")}
    //             </div>
    // </div> 
    // `
    // rightContainer.insertAdjacentHTML('afterbegin',html1);
}
loadParticularRecipe();

// window.addEventListener('hashchange' , loadParticularRecipe); This is also a display property so we have to keep it in View
function CallHashChangeEventHandler(){
    const r = new View();
    r.HashChangeEventHandler(loadParticularRecipe);
}
CallHashChangeEventHandler();   //These are called Publisher-Subscriber design patterns
// Publisher --> that will holds the code related to an event--> HashChangeEvent();
//Subscriber --> that will called when the event occured --> loadParticularRecipe();
//------------Helpers and config files
//Heplers(variables)  are nothing but variables that we are using again and again
//config(functions) are nothing but functions that we are using again and again