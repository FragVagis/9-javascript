console.clear ();
const input = '26036620141509187239116997482231358457631569791718398328217017362646111242535735188838146132831407046811486933605685735424884227740041391231920809440579680080';

function  pairCount(str) {
    const ats = Array(100).fill(0);
    for (let i=0; i<str.length; i++){
        const current = str[i];
        const next = str[i - 1];
        const index = parseInt(previous + current);
        ats[index]++;
    }
    return ats;
}

function max(list) {
    const biggest = list.sort((a, b) => b - a)[0];
    const ats = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i] === biggest) {
            ats.push(i);
        }
    }
}

console.log(pairCount(input));
const maxList = max(pairs)

console.log(pairs);
console.log(pairs.sort((a, b) => a - b));



/* KLAIDINGAS KODAS*/