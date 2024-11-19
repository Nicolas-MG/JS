 async function* Nuevafuncion(){
     yield await Promise.resolve(1);
     yield await Promise.resolve(2);
     yield await Promise.resolve(3);
}

const other = Nuevafuncion();
other.next().then(Response => console.log(Response.value));
other.next().then(Response => console.log(Response.value));
other.next().then(Response => console.log(Response.value));
console.log('Holaa!')

async function otronuevo(array) {
    for await (let value of array){
        console.log(value)
    }
}

const name = otronuevo(['Oscar','David','Ana']);
console.log('after');