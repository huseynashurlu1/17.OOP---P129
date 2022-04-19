// let Person = new Object(); // instance
// Person.firstName = "Musa";
// Person.age = 20;

// let Student = {}; // literal

// let x = 10;
// let y = new Number(10);

// let ad = "Musa";
// let name = new String("Musa");

// let isStudent = true;
// let telebedir = new Boolean(true);

// let date = new Date();

// let random_num = Math.random();


// let Person = {
//     ad: "Musa",
//     soyad: "Dadasov",
//     yas: 20,
//     job: "Developer",
//     "secdiyi vezife": "Developer",
//     tamAd: function() {
//         return this.ad + " " + this.soyad
//     }
    
// }

// let Human = Person;
// Human.ad = "Elgiz";

// console.log(Person.ad);
// console.log(Person.soyad);


// let x = 20;
// let z = x;
// z = 30;
// console.log(x);

// Person.tevellud = function(){
//     return new Date().getFullYear() - this.yas
// }

// for(let x in Person) {
//     console.log(x);
// }


// delete Person.job;
// console.log(Person);

// console.log(Person.job);
// console.log(Person['job']);

// console.log(Person.tamAd())
// console.log(Person.tevellud())

// function Person(name,age,job){
//     this.name = name;
//     this.age = age;
//     this.job = job;
// }

// class Human{
//     constructor(name,job,age) {
//         this.name = name;
//         this.age = age;
//         this.job = job;
//     }
// }

// let Doctor = new Human("a","Surgery",30);

// let Developer = new Person("Musa",20,"Front-end developer");
// let Designer = new Person("Cavid",25,"UX/UI Designer");

// console.log(Developer.name);
// console.log(Designer.name);

// console.log(this);


// Object Literals 

// let Student = {
//     get ad() {
//         return  "*" + db.Students.name
//     },
//     name: "Musa",
//     age: 20,
//     birthDate() {
//         return new Date().getFullYear()-this.age;
//     },
//     tevellud: function() {
//         return new Date().getFullYear()-this.age;
//     },
//     address: {
//         city: "Baku",
//         country: "Azerbaijan",
//         street: {
//             name: "Nizami str",
//             no: 23
//         }
//     }
// }

// console.log(Student.ad())
// console.log(Student.name)
// console.log(Object.values(Student));

// console.log(Student.address.city + " / " + Student.address.country);


// const data = [
//     {id:1,count:20},
//     {id:2,count:10},
//     {id:3,count:25}
// ]
// console.log(data[0]);




// let date = new Date();

// Date.prototype;

// function Human(name,age) {
//     this.name = name;
//     this.age = age;
// }

// let pr1 = new Human("Musa",20);
// pr1.lang = 'RU';
// console.log(pr1);



// function Group(name) {
//     this.name = name;
// }

// let g = new Group("P129");
// let x = new Group("P312");

// Group.prototype.room = "Saturn";
// g.room = "Jupiter";
// console.log(g);
// console.log(x);



// let colors = ['red','black','red','green','white','black'];
// let unique_colors = [...new Set(colors)]
// console.log(unique_colors);


// freeze / seal

// let Person = {
//     ad: "Musa",
//     soyad: "Dadasov",
//     yas: 20,
//     job: "Developer"
// }
// console.log(Object.keys(Person));

// Object.defineProperties(Person,{tevellud: 2002},{},{})

// let X = Object.create(Person);
// X.firstname = 


// Object.freeze(Person);
// Person.ad = "Vasif";

// console.log(Person.ad);


// REST & SPREAD OPERATORS

let front_end = ['html','css','js'];
let back_end = ['c#','sql','server'];
// let full_stack = front_end.concat(back_end);
let full_stack = [...front_end,...back_end];
console.log(full_stack);


function Hesabla(x,y,z) {
    console.log(x * y * z);
}

let numbers = [2,3,6,10,20,30];

Hesabla(...numbers);

// let Person = {
//     name: "Musa",
//     age: 20
// }

// console.log(...Person)


function Show(a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c)
}

let nums = [1,3,5,7,9,11,13,15];

Show(10,20,...nums);

let group = {
    name: "P129",
    count: 15
}


let qrup = {
    name: "P333",
    count: 12
}

// DESCTRUCTING

const {count,name} = group
const {Qrupname,Qrupcount} = qrup

console.log(name);
console.log(count);