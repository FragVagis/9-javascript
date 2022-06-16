console.clear();

const n1 = 7;
const n2 = '5';

function suma (a,b) {
    if (typeof a !== 'number') {
        return 'ERROR: Pirmas parametras ne skaiciu'
    }
    if (typeof b !== 'number') {
        return 'ERROR: Antras parametras ne skaiciu'
    }
    console.log('gavau:', a);
    console.log('gavau:', b);
    return a+b;
}

const ats = suma(n1, n2);
console.log(ats);