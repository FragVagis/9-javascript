console.clear();
console.log('-----------PRDADŽIA-----------')

const marks = [10, 2, 8, 4, 6]

const minMark = Math.min(...marks);
console.log(minMark);


const maxMark = Math.max(...marks);
console.log(maxMark);

const pirmas = [7, 8, 9];
const antras = [77, 88, 99];

const pirmasAntras = [...pirmas, ...antras];
const antrasPirmas = [...antras, ...pirmas];
console.log(pirmasAntras);
console.log(antrasPirmas);

const pirmoKopija = pirmas;

pirmoKopija[0] = 'labas';
console.log(pirmoKopija);

console.log ('---------------------')

const mokiniai = ['Petras', 'Maryte', 'Jonas', 'Ona'];
console.log(mokiniai);

const mokiniuKopija = mokiniai;
console.log(mokiniuKopija);

mokiniuKopija[0] = 555;
console.log(mokiniuKopija);
console.log(mokiniai);

console.log('---------------------')

const a = 7;
console.log(a);

let b = a;
console.log(b);

b = 8;
console.log(b);
console.log(a);

console.log('-------------------------')

const mokinukai = ['Petras', 'Maryte', 'Jonas', 'Ona'];
console.log(mokinukai);

// const mokinukuKopija = mokinukai; // gaunu nuoroda i atminti
const mokinukuKopija = [...mokinukai]; // gaunu pirmo lygio kopija
console.log(mokinukuKopija);

mokinukai[0] = 1111111;
console.log(mokinukai);
console.log(mokinukuKopija);