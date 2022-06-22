console.clear();

/* Uzduotys:
Merge two sorted arrays into one
  CodeWars
  1) sujungti pirma ir antra
  2) Visi skaiciai eitu is eiles
  3) Nerodytu pasikartojancius
  */
const arr1 = [1,5,6,8];
const arr2 = [2,3,4,5,7,9]

/* 1) */const arr1Arr2 = [...arr1, ...arr2];
/* 2) */const minMax = [...arr1Arr2].sort((a, b) => a - b);
/* 3) */let uniqueminMax = [...new Set(minMax)];
console.log(uniqueminMax);

/* Merge two sorted arrays into one
  CodeWars

  function mergeArrays(arr1, arr2) { 
  const arr1Arr2 = [...arr1, ...arr2];
  const minMax = [...arr1Arr2].sort((a, b) => a - b);
  let uniqueminMax = [...new Set(minMax)];
  return uniqueminMax;
  }
*/

console.log('----------------');
/* Welcome to the City
  CodeWars

Sukurkite metodą kuris įvesdamas vardą, miestą ir valstiją, kad pasveikintų asmenį.
Atkreipkite dėmesį, kad vardas bus masyvas, sudarytas iš vienos ar daugiau reikšmių,
kurios turėtų būti sujungtos su vienu tarpu tarp kiekvienos,
o vardo masyvo ilgis bandomaisiais atvejais skirsis.

*/

function sayHello( name, city, state ) {
  return `Say hello ${name}, ${city}, ${state}`;
}


console.log('----------------');
/* Remove String Spaces
  CodeWars
*/
const str = ' A   B   C  B G D ';
const noWhitespace = str.replace(/\s/g, '');
console.log(noWhitespace);

/*

function noSpace(x){
 return x.replace(/\s/g, '');
}
*/


console.log('----------------');
/*Get Planet Name By ID
  CodeWars
*/

function getPlanetName(id){
  var name;
  switch(id){
    case 1: name = 'Mercury'; break;
    case 2: name = 'Venus'; break;
    case 3: name = 'Earth'; break;
    case 4: name = 'Mars'; break;
    case 5: name = 'Jupiter'; break;
    case 6: name = 'Saturn'; break;
    case 7: name = 'Uranus'; break;
    case 8: name = 'Neptune'; break;
  }
  
  return name;
}

/* Lengvesnis variantas */
 function getPlanetName(id){
  return {
    1: 'Mercury',
    2: 'Venus',
    3: 'Earth',
    4: 'Mars',
    5: 'Jupiter',
    6: 'Saturn',
    7: 'Uranus',
    8: 'Neptune'
  }[id]
}
