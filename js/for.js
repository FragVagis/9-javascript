/*
CIKLAI:
for, for-of, for-in, foreach, while, do-while, map, filter, reduce, sort, ...

sablonas
for () {}
*/

const kupiuros = [20, 5, 50, 100, 10];

let pinigine = 0;

console.log('START');

for (let i = 0; i < kupiuros.length; i++) {
    console.log(i, ')', kupiuros[i]);
}

console.log('END')


console.log('---------------------------')

for (let i = -100; i <= -90; i++) {
    console.log(i);
}

console.log('---------------------------')

for (let i = -90; i >= -100; i--) {
    console.log(i);
}
console.log('---------------------------')

const monetos = [20, 5];

let kojine = 0;

console.log('START');

for (let i = 0; i < monetos.length; i++) {
    console.log(i, ')', monetos[i]);
    kojine += monetos
    console.log(i, ')', monetos, '->', kojine);
}
console.log(kojine);
console.log('END')


console.log('---------------------------')

console.log([].length)
console.log(['a'].length)
console.log(['a', 'b'].length)
console.log(['a', 'b', 'labas'].length)

console.log ('');
console.log('labas');
console.log(''.length);
console.log('labas'.length);

const word = 'Karsta vasara!';
for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    console.log(1, ')', letter);
}

console.log('--------------------------------------------------')
 for (let i=10; 1 > 0; i--) {
    console.log(i);
    if (i === 5)
        break;
 } 


const money = [5,10,20,50,100,5,10,20];
const minTarget = 80;
const hand = [10];
let handTotal = 0;


for (let i=0; i<money.length; i++) {
    const value = money[i];
    console.log('${i}) ${value} -> total: ${handTotal}');
    if (handTotal >= minTarget) {
        break
    }
}

const graza = handTotal - minTarget;
if (graza > 0) {
    console.log ('graza: ${graza}');
} else if (graza === 0) {
    console.log('Duota lygiai tike kiek reikia pinigu')
} else {
    console.log('Tu skoloje dar: ${graza * - 1} pinigu');
}