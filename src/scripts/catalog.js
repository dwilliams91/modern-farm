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
let string=" "
// this part right here creates the html. It also checks to see if it is an
// array or object since corn is an array but everything else is an object
if (Array.isArray(plantObj)===true){
    string=`<section class=plant>${plantObj[0].type}</section>`
}
else{
    string=`<section class=plant>${plantObj.type}</section>`
}
return string
}