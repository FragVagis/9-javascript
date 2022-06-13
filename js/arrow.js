//function declaration
function sudetis(a, b) {
    return a+b;
}
console.log('Sudetis: ', sudetis (7, 7));

//anonimine funkcija
const atimtis = function(a, b){
    return a-b;
}

console.log('Atimtis: ', atimtis (7, 7));

//arrow (rodykline) funtion; pvz c# vadinama lambda funkcija
const daugyba = (a, b) => {
    return a*b;
}
console.log('Daugyba: ', daugyba (7, 7));


//arrow funtion:
//kai logikos bloke yra TIK 1 procedura, tai nenaudojam {} ir return
const dalyba = (a, b) => a/b;

console.log('Dalyba: ', dalyba (7, 7));

//arrow funtion:
//kai parametru bloke yra TIK 1 parametras, tai nenaudojam ()
const kvadratas = a => a ** 2;

console.log('Kvadratas: ', kvadratas (18));