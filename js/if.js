/*
SALYGOS SAKINYS
sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} ....  else if () {}
if () {} else if () {} ....  else if () {} else {}
Palyginimo operatoriai:
visi: >, <, >=, >=, <=, <=, ==, !=, ===, !==
naudotini: >, <, >=, >=, <=, <=, ===, !==
nenaudotini: ==, !=
Loginiai operatoriai:
&& (and) - turi tenkinti visos salygos
|| (or) - turi tenkinti bent viena salyga
*/

const a = 77;
const b = 555;

console.log('START');

if (a > b) {
    console.log('Pirmas yra daugiau uz antra');
} else {
    console.log('Pirmas nera daugiau uz antra');
}

console.log('END');

const temperatura = 12;

if (temperatura > 12) {
    console.log('Siandien silta');
} else {
    console.log('Siandien NE silta');
}

if (temperatura < 12) {
    console.log('Siandien salta');
} else {
    console.log('Siandien NE salta');
}

const x = 'Labas';
if (x === 'labas') {
    console.log('TAIP');
} else {
    console.log('NE');
}

const diena = 1;
if (diena === 1) {
    console.log('pirmadienis');
} else {
    if (diena === 2) {
        console.log('antradienis');
    } else {
        if (diena === 3) {
            console.log('treciadienis');
        } else {
            if (diena === 4) {
                console.log('ketvirtadienis');
            } else {
                if (diena === 5) {
                    console.log('penktadienis');
                } else {
                    if (diena === 6) {
                        console.log('sestadienis');
                    } else {
                        if (diena === 7) {
                            console.log('sekmadienis');
                        } else {
                            console.log('tokia diena savaiteje neegzistuoja');
                        }
                    }
                }
            }
        }
    }
}

console.log('-----------');
const day = 2;
if (day === 1) {
    console.log ('pirmadienis');
} else if (day === 2) {
    console.log ('antradienis');
} else if (day === 3) {
    console.log ('treciadienis');
} else if (day === 4) {
    console.log ('ketvirtadienis');
} else if (day === 5) {
    console.log ('penktadienis');
} else if (day === 6) {
    console.log ('sestadienis');
} else if (day === 7) {
    console.log ('sekmadienis');
} else {
    console.log ('neegzistuoja');
}


console.log ('---------');

const nuoKadaSilta = 12;
const temp = 18;
const lietus = true;

if (lietus === true) {
    if (temp > nuoKadaSilta) {
        console.log ('varom nuogi');
    } else {
        console.log ('pasiimk palta ir skieti');
    } 
} else {
    if (temp >= nuoKadaSilta) {
        console.log(' gali eiti su maike');
    } else {
        console.log ('pasiimk striuke');
    }
}

console.log ('----------');


const silta = temp >= nuoKadaSilta;
const ats = '3)' + lietus ? silta ? 'varom nuogi' : 'pasiimk palta ir skieti' : silta ? 'gali eiti su maike' : 'pasiimk striuke';
console.log(ats);