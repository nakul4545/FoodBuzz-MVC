import { anotherRecipeObj } from "./Model.js";

export class View {

    rightContainer;
    html1;
    render() {
        this.rightContainer = document.getElementById('right-container');

        this.rightContainer.innerText = "";
        // console.log(anotherRecipeObj);
        let CollectedData = anotherRecipeObj.recipeObj;
        this.html1 = this.actualLogic(CollectedData);
        this.AddDataToContainer();
    }
    actualLogic(CollectedData) {
        // const html1 = because we have to use this in below function so return it and asccept at functn declaration
        return `
    <div class="right-food-container">
                <img class="right-image" src="${CollectedData.IMGURL}">lear
                <h2 class="right-title">${CollectedData.titleRT}</h2>
                <h3 class="right-publisher">${CollectedData.publisherRT}</h3>
                <h3 class="right-servings">${CollectedData.servingsRT}</h3>
                <h3 class="right-cooking-time">${CollectedData.cookingTimeRT}</h3>

                <div class="ingredients"
                ${CollectedData.ingredientsRT.map((i) => {
            return `<div>
                    <h2 class="right-ingredients-span">${i.description}</span> -- 
                    <span class="right-ingredients-span">${i.quantity}</span> 
                    <span class="right-ingredients-span">${i.unit}</span>
                    </div>
                    `
        }).join("")}
                </div>
    </div>`
    }
    AddDataToContainer() {
        this.rightContainer.insertAdjacentHTML('afterbegin', this.html1);
    }
    HashChangeEventHandler(data){
        window.addEventListener('hashchange' , data);
    }
    HandleError(){
        this.rightContainer = document.getElementById('right-container');
        this.rightContainer.innerText ="";
        this.rightContainer.innerText ="Please Enter a valid ID!";
    }
}

