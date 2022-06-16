console.clear();

const texts = [
   // '',
   // 'labas',
    //'labas rytas',
   // 'labas rytas Lietuva',
    //' labas',
    //'labas ',
    //' labas ',
    '          labas          rytas         ',
];

function wordCount(str) {

    const words = str.trim().split(' ').filter(w => w !=='');
   /* let count = 0;
    for (const word of words) {
        if (word !== '') {
            count++
        }
    }
     return count
*/
    return words.length;
}

for (const text of texts) {
    const count = wordCount(text);
    console.log(count, `"${text}"`);
}

