//  Arrays destructuring

let frutas = ['banana', 'mango'];

let [a,b] = frutas;

console.log(a,b);

// objetos destructuring

let user ={
    name : 'Nicolas',
    age : 25
};
let { name ,age } = user;
console.log(user)


function solution(json1, json2) {
    json1 = json1 || { name: "Mr. Michi", food: "Pescado" };
    json2 = json2 || { age: 12, color: "Blanco" };
  
    return { ...json1, ...json2 }
  }

console.log(solution())