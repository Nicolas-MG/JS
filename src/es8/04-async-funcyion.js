const fnAsync = () =>{
    return new Promise((resolve, reject) =>{
        (true)
        ? setTimeout(() =>resolve("Async"),2000)
        : reject(new Error('Error'));
    });
}

const anotherFH = async () =>{
    const somethig = await fnAsync();
    console.log(somethig);
    console.log('HELLO!!');
}

console.log('Before!');
anotherFH();
console.log('After');