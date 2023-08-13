// Functions thar are re-used
import { View } from "../MVC/View.js"
export async function getJSON(url){
    const result =  await fetch(url).then(data => data.json())
    if(result.status ==='success'){
        return result
    }
    else if(result.status === 'fail'){
        const r = new View();
        r.HandleError();
    }
}