let Num = 29;
if (Num % 10 == 0) {
    console.log("good");
} else {
    console.log("bad");
}

// let user = prompt("Enter user");
// let age = prompt("Enter age");

// alert(`The user is ${user}`);
// alert(`The age is ${age}`);
// let name=prompt("pleaseenteryourname");
// let age=prompt("pleaseenteryourage");
// alert(`${name} is ${age} yearsold.`);


let q= 2;

switch(q) {
    case 1 :
        console.log("jan","feb","Mar");
        break;
    case 2 :
        console.log("apr","may","june");
        break;
    case 3:
        console.log("July,August,September");
        break;
    case 4:
        console.log("October,November,December");
        break;
    default :
        console.log("Broken day");
}

let goldenstring = "Abhis";
if ((goldenstring[0] === 'A' || goldenstring[0] === 'a') && goldenstring.length === 5) {
    console.log("string golden.");
} else {
    console.log("not string golden.");
}

// Writeaprogramtofindthelargestof3numbers.
// let a = Number(prompt("Enter number 1"));
// let b = Number(prompt("Enter number 2"));
// let c = Number(prompt("Enter number 3"));

// if (a > b && a > c) {
//     console.log(`a is largest: ${a}`);
// } else if (b > a && b > c) {
//     console.log(`b is largest: ${b}`);
// } else if (c > a && c > b) {
//     console.log(`c is largest: ${c}`);
// } else {
//     console.log("There might be a tie among the numbers.");
// }

// Writeaprogramtocheckif2numbershavethesamelastdigit
// let d = Number(prompt("Enter number 1"));
// let e = Number(prompt("Enter number 2"));
// if (d[0]==e[0]){
//     console.log("the numbers has same last digit")
// } else{
//     console.log("the numbers  doesnot has same last digit")
// }

// let d = Number(prompt("Enter number 1"));
// let e = Number(prompt("Enter number 2"));

// if (d % 10 === e % 10) {
//     console.log("The numbers have the same last digit");
// } else {
//     console.log("The numbers do not have the same last digit");
// }

// ASG3
// WriteaJavaScriptprogramtogetthefirst n elementsofanarray


let array = [2, 5, 6, 7, 1, 58, 90];
let n = 3; 
let result = array.slice(0, n);
console.log(result);  // Output: [2, 5, 6]

let array1 = [2, 5, 6, 7, 1, 58, 90];
let n1 = 3; 
let result1 = array.slice(array.length-n);
console.log(result1);  // Output: [2, 5, 6]


// let n = Number(prompt("Enter how many elements you want"));
// let result = array.slice(0, n);
// console.log(result);

// WriteaJavaScriptprogramtocheckwhetherastringisblankornot.
let a="ad";
if(a===""){
    console.log("blank");
}else{
     console.log(" not blank");
}

// WriteaJavaScriptprogramtotestwhetherthecharacteratthegiven(character)indexislowercase
let b="myName is Madhuri"
let ind=2;
if (b[ind]==b[ind].toLowerCase())
{
    console.log("lower case");
}else{
     console.log(" not lower case")
}

// WriteaJavaScriptprogramtocheckifanelementexistsinanarrayornot.
let c = [23, 56, 78, 12, 45, 89];
let s = 45;

// indexOf returns -1 if the element is not found
if (c.indexOf(s) !== -1) {
    console.log(`✅ Found ${s} at index ${c.indexOf(s)}.`);
} else {
    console.log(`❌ Did not find ${s} in the array.`);
}


let c2 = [23, 56, 78, 12, 45, 89];
let s2= 45;


for (let i = 0; i < c.length; i++) {
    if (c2[i] === s2) {
        console.log(`Found ${s2} at index ${i}`);
        break; // stop checking after first match
    }
    else {
        console.log(`Not found: ${s2}`);
    }
}

let str = prompt("Please enter a string");
console.log(`Original string = ${str}`);
console.log(`String without leading/trailing spaces = ${str.trim()}`);

