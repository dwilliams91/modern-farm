import { addPlant } from "./field"
import { createAsparagus } from "./seeds/asparagus"
import { createPotato } from "./seeds/potato"
// The plan is an array. It contains 4 arrays representing the rows in the field to be plants. 
// Figure out how to iterate both the parent array and the child arrays.
// As you iterate the row of food types to be planted, invoke the corresponding factory function

import { createSoybean } from "./seeds/soybean"
import { createSunflower } from "./seeds/sunflower"
import { createWheat } from "./seeds/wheat"
import { createCorn } from './seeds/corn.js'


//  (e.g. if the food type is "Asparagus", invoke the createAsparagus function to get an asparagus seed).
export const plantSeeds = (yearsPlanting) => {
    //  i will loop through large array
    let i = 0
    // j willloop through smaller array
    let j = 0
    for (i = 0; i < yearsPlanting.length; i++) {
        for (j = 0; j < yearsPlanting[i].length; j++) {
            let seed=""
            let findCorrectSeed = yearsPlanting[i][j]
            console.log(findCorrectSeed)
            // this goes through and identifies the type of seed to be created
            if (findCorrectSeed == "Potato") {
                let seed=createPotato()
            }
            else if (findCorrectSeed == "Soybean") {
                let seed=createSoybean()
            }
            else if (findCorrectSeed == "Sunflower") {
                let seed=createSunflower()
            }
            else if (findCorrectSeed == "Corn") {
                 let seed=createCorn()

            }
            else if (findCorrectSeed == "Wheat") {
                let seed=createWheat
            }
            else if (findCorrectSeed == "Asparagus") {
                let seed=createAsparagus
            }
           let checkingVariable= addPlant(seed)
           console.log(checkingVariable)
        }

    }
}


