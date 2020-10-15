import {createPlan} from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createWheat } from './seeds/wheat.js'
import { createSunflower } from './seeds/sunflower.js'
import { addPlant, field, usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'
import { Catalog } from './catalog.js'


console.log("Welcome to the main module")
const yearlyPlan=createPlan()
console.log("yearly plan "+ yearlyPlan)
// these functions create seeds with type, height, and output objects

const cornSeed=createCorn()
// console.log(cornSeed)

const soybeanSeed=createSoybean()
// console.log(soybeanSeed)

const sunflowerSeed=createSunflower()
// console.log(sunflowerSeed)

const asparagusSeed= createAsparagus()
// console.log(asparagusSeed)

const potatoSeed=createPotato()
// console.log(potatoSeed)

const wheatSeed=createWheat()
// console.log(wheatSeed)
// this is the end of the creating seeds lesson

// this part is testing the fields.js file
// console.log(testingAddPlant)



// console.log(checkingAddingCorn)

// const checkingUsePlants=usePlants(checkingAddingCorn)
// console.log(checkingUsePlants)

// this is the tractor part
let testArray=[
    ["Potato", "Soybean", "Soybean", "Corn"],
    ["Wheat", "Corn", "Wheat", "Asparagus"],
    ["Asparagus", "Wheat", "Soybean", "Corn"],
    ["Asparagus", "Soybean", "Potato", "Wheat"]
]
// expected output potato 2, soybean 4 so 8 soybeans

// this stores the tractor part in an array
const plantArray=plantSeeds(testArray)

let cropsToSell=harvestPlants(field)
console.log(cropsToSell)
// below is selling the crops
Catalog() 

// I think there is a problem with usePlants
let checking=usePlants()
console.log("use plants ",checking)



console.log(cropsToSell.filter(p => p.type === "Corn"))