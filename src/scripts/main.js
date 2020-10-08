import {createPlan} from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createWheat } from './seeds/wheat.js'
import { createSunflower } from './seeds/sunflower.js'
console.log("Welcome to the main module")
const yearlyPlan=createPlan(

)
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