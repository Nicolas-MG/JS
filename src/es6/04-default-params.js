function parametros(ciudad, pais, continente){
    var ciudad = ciudad || 'no se ingreso';
    var pais = pais || 'tampoco se ingreso';
    var continente = continente || 'este no ingreso nada'
    console.log(ciudad, pais, continente)
}
parametros();


function newParametro(name = 'ingresealgo', age = 'ni la edad'){
    console.log(name, age)
}
newParametro()
newParametro('Nicolas', '24')


// spread operator

let person = { name : 'oscar', age : 25 };
let country = 'Col';

let data = { ...person, country};
console.log(data)

// rest

function sum (num, ...values){
    console.log(values);
    console.log(num + values[0]);
}


