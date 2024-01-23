function luck() {
	Math.floor(Math.random() * 6) + 1;
}


function me(who){
	console.log(`hi ${who}!`)
}

let die1 = luck();
let die2 = luck();
let die3 = luck();
let die4 = luck();
let die5 = luck();
let die6 = luck();


function greet(firstname,lastname){
	console.log(`Hey there, ${firstname}! you lastname is ${lastname}`);
}

greet("costas", "bellos");


function repeat(str, num){
	let oneword = " ";
	for (let i = 0; i < num; i++) {
		console.log(str)
		oneword += str;
	}
	console.log(oneword)
}

repeat("www",13)


function add(x,y){
	if (typeof x !== 'number' || typeof y !== 'number'){
		return false;
	}
	let sum = x+y;
	return sum;
}


function multiply(x,y){
	return x*y
}

multiply(2,6)


function isShortsWeather(temperature){
	if (temperature >= 75) {
		return true;
	}
	return false;
}
isShortsWeather(85)


function lastElement(arr){
	if (arr.length !== 0){
		return arr[arr.length -1];
	}
	return null;

}

function capitalise(stri){
	let firstletter = stri[0].toUpperCase();
	return firstletter + stri.slice(1, stri.length)
}

console.log(capitalise("fuck"))


function sumArray(ar){
	let sum=0;
	for (let i=0; i<ar.length; i++){
		sum += ar[i];
	}
	return sum;
}


function returnDay(day){
	if ((day<1) || (day>7)){
		return null;
	}
	const week = {
		"1" : "Monday",
		"2" : "Thusday",
		"3" : "Wednesday",
		"4" : "Thursday",
		"5" : "Friday",
		"6" : "Saturday",
		"7" : "Sunday"

	}
	return week[day]
}


const math = {
	multiply : function(x,y){
		return (x*y);
	},
	divide : function(x,y){
		return (x/y);
	},
	cube : function(x){
		return (x*x*x);
	}
}


const square = {
	area : function(x){
		return (x*x);
	},
	perimeter: function (r){
		return (r*4)
	}
}


const cat = {
	name : "costttttttttttas",
	surname : "bbbbbbbbellos",
	hello() {
		console.log(`${this.name} ${this.surname} !`)
	}
}
//cat.hello()


heros = [1,2,3,4,5,5,6,7]
for (let hero of heros){
	console.log(hero)
}


const tetra = function(x){
	return x*x
}

const hen = {}


try {
	thisIsMistake.toUpperCase()
} catch (e){
	console.log(e)
	console.log("-------------------")
	//console.log("ti malakies grafeis")
}

const arithmoi = [1,2,3,4,5,6,7,8,9,120,11,12,13,14,15,16,17,18]

function print(element){
	console.log(element);
}

print(arithmoi[0])
print(arithmoi[1])

arithmoi.forEach(function (el){
	if (el % 5 == 0){
	console.log(el)
	}
})

const text = ["bellos", "wow"];

const bigtext = text.map(function(el){
	return el.toUpperCase()
})

console.log(text);
console.log(bigtext)

const numbers = [1, 2, 3, 3, 3, 4, 4, 5, 6, 67, 7, 87, 8]

const gam = numbers.map(function(x){
	return x*2
})
console.log("-------------------------------")
console.log(numbers)
console.log(gam)
console.log("-------------------------------")

const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// Write your code here

const firstNames = fullNames.map(function(elem){
    return elem.first
})

console.log(fullNames)
console.log(firstNames)

const adding = (x,y) => {
	console.log(x+y)
}

setTimeout(() => {
	console.log("hello!!")
}, 3000);

//setInterval(() => {
//	console.log("oh fuck")
//}, 1000);

const nums = [1,4,5,3,5,6,6,7,7,56,56,56,4,63636,6,3636]

const newnums = nums.filter(n => {
	return n > 3635
})

console.log(newnums)

const movies = [{
	title: 1,
	score: 233
},{
	title: 2,
	score: 23
}, {
	title: 3,
	score: 222323
}]


const newmovies = movies.filter(movie => {
	return movie.score >=233;
})

console.log(newmovies)


const isgood = movies.some(movie => {
	return movie.score > 600000;
} )


const usernames = ["kwjdfdssadsdsdkweh","wef","wefwe","efgesfsdfs"];

const newusernames = usernames.filter(username => {
	return username.length < 9;
})

console.log(newusernames);


const grades = [9,8,8,9,7,2,10]

grades.reduce((total, grade) => {
	console.log(total + grade);
	return total + grade;
})

const person = {
	firstName : "Costas",
	lastName : "Bellos",
	saysHi : function () { // it does  not work with arrow function.
		console.log (`${this.firstName} ${this.lastName} says Hello to you!`)
	}
}


function check(x,y=3) {
	if (x === undefined) {
		x = 7
	}
	return `${x} kai  ${y}`
}


const listOfNums = [2,3,4,5,3,43,4,3];

Math.max(...listOfNums) // spread in Function Calls


const cats = ["sdf", 'ddsgs', "dfgf"];
const dogs = ["sfgsf", "dsfsdf", "sdsdfsd"];

const allPets = [...cats, ...dogs] //Spread with arrays - mpainoun san strings ksexorista, alliws mpainoun san arrays

const obj1 = {
	name : "costas",
	surname : 'bellos',
	instrument : "guitar"
}

const obj2 = {
	name : "leo",
	surname : 'bith',
	instrument : "piano"
}

const obj3 = {...obj1, degree: "PhD"} //Spread with Objects
console.log(obj3)

function raceresults(gold,silver,...anyoneElse) {
	console.log(`gold gies to: ${gold}`)
	console.log(`silver gies to: ${silver}`)
	console.log(`thanks to everyone else: ${anyoneElse}`)
}

const points = [10, 8, 3, 4, 4, 5];

const [first, second, third, ...restOfPoints] = points ; //destructuring arrays

 const anyPerson = {
	name: "konstantinos",
	surname: "bellos",
	age: 30

 }

 const {name, age} = anyPerson;
 const {name: newname} = anyPerson; //creates a variable named newname with the value of anyPerson.name


function nameOfObject({name, surname}){ //Destructuring Objects -- ask for specific methods of objects directly
	return `${name} ${surname}`
}





















