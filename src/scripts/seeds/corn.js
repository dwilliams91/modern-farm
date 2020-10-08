export const createCorn= ()=> {
    
    let cornRow=[]
    let i=0
    for (i=0;i<=1;i++){
        let seed={}
        seed.type="Corn";
        seed.height=180
        seed.output=6
        cornRow.push(seed)
        
    }
    return cornRow
}