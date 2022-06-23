console.clear();

const person = {
    name: 'Petras',
    age: 99,
    isMarried: true,
    children: [
        {
            name: 'Bart',
            age: 50,
        },
        {
            name: 'Liza',
            age: 60,
        }
    ]
}

//const name = person.name;
//const isMarried = person.isMarried;
//const age = person.age;

const {age, children} = person;
const [Bart, liza] = children;

console.log(age);
console.log(children);

console.log(Bart);
console.log(liza);

const marks = [1,2, 3, 4, 5];
const [first, second, ...other] = marks;

console.log(first);
console.log(second);
console.log(other);