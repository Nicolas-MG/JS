const promise1 = new Promise((resolve, reject) => resolve('resulto'))
const promise2 = new Promise((resolve, reject) => reject('resulto tambien'))
const promise3 = new Promise((resolve, reject) => resolve('resulto #2'))

Promise.any([promise1,promise2,promise3])
    .then(Response => console.log(Response));
