export let field = [];
// this function pushes the seed into the field array
export const addPlant = (seed) => {

    field.push(seed)
    return field
}
// this file creates "a copy of the array of plants" as described in the instructions. 
// I used .slice since that is a command which we used in class

export const usePlants = () => {
    let usePlantsArray = []

    for (const item of field) {
        usePlantsArray.push(item)
    }
    return usePlantsArray

}
