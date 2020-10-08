import {createPlan} from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createWheat } from './seeds/wheat.js'
import { createSunflower } from './seeds/sunflower.js'
import { addPlant, usePlants } from './field.js'
console.log("Welcome to the main module")
const yearlyPlan=createPlan(

)
// these functions create seeds with type, height, and output objects
const cornSeed=createCorn()
console.log(cornSeed)

const soybeanSeed=createSoybean()
console.log(soybeanSeed)

const sunflowerSeed=createSunflower()
console.log(sunflowerSeed)

const asparagusSeed= createAsparagus()
console.log(asparagusSeed)

const potatoSeed=createPotato()
console.log(potatoSeed)

const wheatSeed=createWheat()
console.log(wheatSeed)
// this is the end of the creating seeds lesson

// this part is testing the fields.js file
const testingAddPlant=addPlant(sunflowerSeed)
console.log(testingAddPlant)


const checkingAddingCorn=addPlant(cornSeed)
console.log(checkingAddingCorn)

const checkingUsePlants=usePlants(checkingAddingCorn)
console.log(checkingUsePlants)