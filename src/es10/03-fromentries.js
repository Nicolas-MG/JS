//      con estos metodos podemos covertir una lista de array en un objeto

const entrin = new Map([['nombre', 'nicolas'], ['edad', 25]]);
console.log(entrin);

console.log(Object.fromEntries(entrin));
