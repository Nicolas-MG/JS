const promises = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('muy bien');
        }else{
            reject('no se logro');
        }
    })
}

promises()
    .then(Response => console.log(Response))
    .catch(Error => console.log(Error))