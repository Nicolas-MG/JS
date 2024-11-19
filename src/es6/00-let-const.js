var nicolas = "el mejor del mundo";
nicolas = 'el mejor de todos los tiempo'
console.log(nicolas);

const frutas = () =>{
    if(true){
        var fruta1 = 'banano'; // function scope
        let fruta2 = 'kiwi'; // block scope
        const fruta3 = 'mango'; // block scope
    }
    console.log(fruta1)
    console.log(fruta2)
    console.log(fruta3)
}
frutas();
