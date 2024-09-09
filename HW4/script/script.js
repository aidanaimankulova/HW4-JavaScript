    // WORK1

// const voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];
 
// const trueVoters = voters.reduce((acc, current) => 
// {
//     return current.voted ? acc + 1 : acc;}, 0);
//     console.log(trueVoters);
    

    // WORK2
   
const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const sumPrice = wishlist.reduce((acc, current)=> acc + current.price, 0);

console.log(sumPrice);


// WORK3

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const ageGroups = voters.reduce((acc, person) => {
    if (person.age >= 18) {
        acc.adults += 1; 
    } else {
        acc.minors += 1; 
    }
    return acc;
}, { adults: 0, minors: 0 });

console.log(`Количество совершеннолетних: ${ageGroups.adults}`);
console.log(`Количество несовершеннолетних: ${ageGroups.minors}`);


//    WORK4

const people = [
    {name: 'Bob', age: 30},
    {name: 'Jake', age: 32},
    {name: 'Kate', age: 25},
    {name: 'Sam', age: 20},
    {name: 'Phil', age: 21},
    {name: 'Ed', age: 55},
    {name: 'Tami', age: 54},
    {name: 'Mary', age: 31},
    {name: 'Becky', age: 43},
    {name: 'Joey', age: 41},
    {name: 'Jeff', age: 30},
    {name: 'Zack', age: 19}
];

const over30 = people.filter(person => person.age > 30);

console.log(over30);