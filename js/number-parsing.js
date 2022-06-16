console.clear();


function suma(a, b){
    a  = +a;
    b  = +b;

    a = 5 - +a
    a = 5 + a

    if(isNaN(a)) {
        return 'Error: Pirmas parametras ne tikras skaicius';
    }
    if(isNaN(b)) {
        return 'Error: Antras parametras ne tikras skaicius';
    }
    return a + b;
}


module.exports = suma;