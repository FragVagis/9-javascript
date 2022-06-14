const marks = [10,2,8,4,6];

// for
console.log ('-------------- For')
for (let i =0; i<marks.length; i++) {
    const mark = marks[i];
    console.log(mark);
}

console.log ('-------------- For-of')
// for-of 
for (const mark of marks) {
    console.log(mark);
}

console.log ('-------------- While')
// while
let i = 0;
while (i < marks.length) {
    const mark = marks [i];
    console.log(mark);
    i++;
}

console.log ('-------------- Do-while')
// do-while
let i2 = 0;
do {
    const mark = marks [i2];
    console.log(mark);
    i2++;
} while (i2 < marks.length)

console.log ('-------------- Foreach1')
// foreach
marks.forEach((mark, i, list) => {
    console.log(mark, i, list);
})
console.log ('-------------- Foreach2')
marks.forEach((mark, i) => {
    console.log(mark, i);
})
console.log ('-------------- Foreach3')
marks.forEach(mark => {
    console.log(mark);
})

console.log ('-------------- Map')
// map - kaip modifikuoti kiekviena nari
const rezMap = marks
    .map(mark => mark * 2)
    .map(mark => mark > 10 ? 10 : mark);

const rezMap2 = marks
    .map(mark => mark * 2 > 10 ? 10 : mark * 2);
console.log(marks);
console.log(rezMap);
console.log(rezMap2);

console.log ('-------------- Filter')
// filter
const filterMarks = marks
    .filter(mark => mark > 2)
    .filter(mark => mark < 7);
console.log(marks);
console.log(filterMarks);

console.log ('-------------- Map & filter combo')
// map & filter combo
const mapFilter = marks
    .map(mark => mark * 2)
    .filter(mark => mark > 5);
console.log(marks)
console.log(mapFilter);

console.log ('-------------- Reduce')
// Reduce (subendrinti)
const sumReduce = marks.reduce((total, mark) => total + mark);
const sumReduce20 = marks.reduce((total, mark) => total + mark, 20);
console.log(sumReduce);
console.log(sumReduce20);


const difReduce = marks.reduce((total, mark) => total - mark);
const difReduce20 = marks.reduce((total, mark) => total - mark, -20);
console.log(difReduce);
console.log(difReduce20);


console.log ('-------------- Sort:numbers');
// sort
const numlist = [10, 2, 8, 4, 6, 1, 7, 23, 17];
const minMaxMarks = [...numlist].sort((a, b) => a - b);
const maxMinMarks = [...numlist].sort((a, b) => b - a);

console.log(numlist);
console.log(minMaxMarks);
console.log(maxMinMarks);

console.log ('-------------- Sort:strings')
const stringList = ['b', 'd', 'c', 'de', 'be', 'a', 'at'];
const stringSort = [...stringList].sort();
const minMaxStrings = [...stringList].sort((a, b) => a > b ? -1 :1);
const maxMinStrings = [...stringList].sort((a, b) => a < b ? -1 :1);


console.log(stringList);
console.log(stringSort);
console.log(minMaxStrings);
console.log(maxMinStrings);


