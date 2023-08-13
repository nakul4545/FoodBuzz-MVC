import { allData } from "./Model.js";

export class AllRecipeView{

    leftContainer;
    render(){
        this.leftContainer = document.getElementById('left-container');
        this.getAllData();
    }

    getAllData(){
    const RecipesArray = allData.allRecipeData
    RecipesArray.map((i) => {   //Make sure to use arrow function when u use this keyword in it
        // console.log(i);
        const publisher = i.publisher;
        const title = i.title;
        const imgurl = i.image_url;
        const ID = i.id;
        // console.log(ID);  We provide #ID below on clicking for connect it with right container and display the data 
        return this.leftContainer.insertAdjacentHTML("afterbegin", `
        <a href="#${ID}">   
        <div class="left-food-container">
        <img src="${imgurl}" id="imgurl">
        <h1 id="publisher">${publisher}</h1>
        <h1 id="title">${title}</h1>
    </div>
    </a>
    `)
    })
}
}