export const harvestPlants = (myArray) => {
    console.log(myArray)
    let newArray = []
    for (const plant of myArray) {
        if (plant.hasOwnProperty("output")) {
            console.log(plant.type)
        }
        else (
            console.log(plant[0].type)
        )
    }

    return newArray
}