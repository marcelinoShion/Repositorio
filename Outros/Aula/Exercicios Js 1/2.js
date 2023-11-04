function triangulos(x,y,z) {
    if (x == y && y == z && z == x){
        return  'Equilátero'
    } else if (x !== y && y !==z  && z !== x ){
        return  'Escaleno'
    }else{
        return  'Isósceles'
    }
}
console.log(triangulos(11,24,14))












