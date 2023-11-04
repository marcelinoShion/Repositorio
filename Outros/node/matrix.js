let arr = [ 43, 1, 4, 55, 2, 56, 22, 44]
let trocar = 1
console.log(arr)
while (trocar){
    trocar = 0 
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > arr[i + 1]){
            let sq = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = sq
            trocar = 1
        }
    }
}

console.log(arr)