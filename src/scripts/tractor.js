import { addPlant,field } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from "./seeds/potato.js"
// The plan is an array. It contains 4 arrays representing the rows in the field to be plants. 
// Figure out how to iterate both the parent array and the child arrays.
// As you iterate the row of food types to be planted, invoke the corresponding factory function

import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { createCorn } from './seeds/corn.js'


//  (e.g. if the food type is "Asparagus", invoke the createAsparagus function to get an asparagus seed).
export const plantSeeds = (yearsPlanting) => {
    //  i will loop through large array
    // j willloop through smaller array
    
    for (let i = 0; i < yearsPlanting.length; i++) {    
        for (let j = 0; j < yearsPlanting[i].length; j++) {
            let findCorrectSeed = yearsPlanting[i][j]
            
            // this goes through and identifies the type of seed to be created. It then pushes that seed into the same array.
            if (findCorrectSeed == "Potato") {
                let seed=createPotato()
                addPlant(seed)
            }
            else if (findCorrectSeed == "Soybean") {
                let seed=createSoybean()
                addPlant(seed)
            }
            else if (findCorrectSeed == "Sunflower") {
                let seed=createSunflower()  
                addPlant(seed)
            }
            else if (findCorrectSeed == "Corn") {
                 let seed=createCorn()
                 addPlant(seed)
            }
            else if (findCorrectSeed == "Wheat") {
                let seed=createWheat()
                addPlant(seed)
            }
            else if (findCorrectSeed == "Asparagus") {
                let seed=createAsparagus()
                addPlant(seed)
            }

           
        }
        

    }
    console.log("This should output the field array here "+field)
}


