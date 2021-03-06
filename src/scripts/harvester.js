import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from "./seeds/potato.js"
// The plan is an array. It contains 4 arrays representing the rows in the field to be plants. 
// Figure out how to iterate both the parent array and the child arrays.
// As you iterate the row of food types to be planted, invoke the corresponding factory function

import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { createCorn } from './seeds/corn.js'
import { createCorn2 } from './seeds/secondCreateCorn.js'


export const harvestPlants = (myArray) => {
    // console.log(myArray)
    let newArray = []
    for (const plant of myArray) {

        if (plant.type != "Corn") {
            // console.log(plant.type)
            for (let i = 0; i < plant.output; i++) {
                if (plant.type == "Potato") {
                    let seed = createPotato()
                    newArray.push(seed)
                }
                else if (plant.type == "Soybean") {
                    let seed = createSoybean()
                    newArray.push(seed)
                }
                else if (plant.type == "Sunflower") {
                    let seed = createSunflower()
                    newArray.push(seed)
                }

                else if (plant.type == "Wheat") {
                    let seed = createWheat()
                    newArray.push(seed)
                }
                else if (plant.type == "Asparagus") {
                    let seed = createAsparagus()
                    newArray.push(seed)
                }

            }
        }
        else {
            for (let q = 0; q < plant.output /2 ; q++) {
                let seed = createCorn2()
                newArray.push(seed)
            }
        }

    }
    // console.log("hi", newArray)
    return newArray
}
