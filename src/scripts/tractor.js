// The plan is an array. It contains 4 arrays representing the rows in the field to be plants. 
// Figure out how to iterate both the parent array and the child arrays.
// As you iterate the row of food types to be planted, invoke the corresponding factory function



//  (e.g. if the food type is "Asparagus", invoke the createAsparagus function to get an asparagus seed).
export const plantSeeds=(yearsPlanting)=>{
    //  i will loop through large array
    let i=0
    // j willloop through smaller array
    let j=0
    for   (i=0;i<yearsPlanting.length;i++){
        for (j=0;j<yearsPlanting[i].length;j++){
            console.log(yearsPlanting[i][j])
        }
    }

}
