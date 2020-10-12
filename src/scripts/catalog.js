import { harvestPlants } from "./harvester.js"
import { field } from './field.js'


// const htmlCreator=(myArray)=>{
//    let plantHTMLrepresentation=" "
//    for (const item of myArray){
//        plantHTMLrepresentation +=plantHTML(item)
//    }
// return plantHTMLrepresentation
// }

export const Catalog=()=>{
    const contentElement=document.querySelector(".messages")

    const harvestedCrops=harvestPlants(field)
    let plantString=" "
    for (const plant of harvestedCrops){
        plantString+=plantHTML(plant)

    }

    contentElement.innerHTML+=plantString
    

}

const plantHTML=(plantObj)=>{

return `<section class=plant>${plantObj.type}</section>`
}