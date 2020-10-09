

const htmlCreator=(myArray)=>{
   let plantHTMLrepresentation=" "
   for (const item of myArray){
       plantHTMLrepresentation +=plantHTML(item)
   }
return plantHTMLrepresentation
}

export const Catalog=()=>{
    const contentElement=document.querySelector(".messages")

    const plant
    contentElement.innerHTML+=
    

}

const plantHTML=(plantObj)=>{

return `<section class=plant>${plantObj.type}</section>`
}