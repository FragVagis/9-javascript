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
