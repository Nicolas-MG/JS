function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it = iterate([1,2,3,4,5,6])
console.log(it.next().value)


