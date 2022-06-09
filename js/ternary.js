/*
TERNARY operator
supaprastintas if/else'as

null - neegzistuojanti reiksme (einamupju metu), kuria planujame gauti
*/

let ats = null;
const a = 4;
const b = 2;

if (a > b) {
    ats = 'daugiau';
} else {
    ats = 'NE DAUGIAU';
}

console.log(ats);

const tern = a > b ? 'daugiau' : 'NE DAUGIAU';
console.log(tern);

const egz = 1 ? 2? 3 : 4 : 5;
console.log(egz);


/*
--------------------------------------
REIKSMIU POZITYVUMAS / NEGAVYTUMAS
boolean
skaiciai -> viskas TAIP, isskyrus nuli (0)
null -> false
undefined - false
stringai -> viskas TAIP, isskyrus tuscias stringas
--------------------------------------
*/
if (0) {
    console.log ('taip');
} else {
    console.log('ne')
}