class User {
    //constructor con .This
    constructor(name, age){
        this.name = name;
        this.age = age;
  }
    // Metodos
  #hola(){
    return 'Hola hermoso';
  }
  #saludo(){
    return `${this.hola()} ${this.name} tengo ${this.age}`
  }
  // setters y getters
  get #obt(){
    return this.age
  }
  set #obt(n){
    this.age = n;
  }

};

const nombre = new User('Nicolas', 25);
console.log(nombre.obt);
console.log(nombre.obt = 15);