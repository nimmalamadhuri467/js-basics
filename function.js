function hello(){
    console.log("hello")
}
hello();

function print(){
    age=189;{
        if (age>18){
            console.log("adult");
        }else{
            console.log("not adult")
        }
    }
}
print();

function add(){
    a=8;
    b=9
    c=a+b
    console.log(c)
}
add();

function dice(){
    let N=Math.floor(Math.random()*6)+1;
    console.log(N)
}
dice();

// arguments
function print1(name,age){
    console.log(`my name is ${name} and IaM  ${age} years old`)
}
print1("harry",23)

function add1(a,b){
    console.log(a*b)
}
add1(6,7)
add1(2,3)

function avg(a,b,c){
    d=a+b+c;
    e=d/3;
    console.log(e)
}
avg(2,3,5)

function table(a){
    for (let i=a;i<=a*10;i+=a){
        console.log(i)
    }

}
table(9)
    // return keyword
function add2(a,b){
    return(a+b);
}
console.log(add2(add2(1,9),1))
console.log(add2(1,9))

function seq(a){
    let total=0
    for(let i=1;i<=a;i++){
        total=total+i
}
 return (total)
}
console.log(seq(3));

let inputArray = ["Madhu", "ri"];

function conc(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

console.log(conc(inputArray)); // Output: "Madhuri"

// function scope

let global = 23;       // global scope

function scope(p, q) { // functional scope
    let global = p + q; // this shadows the global 'global'
    return global;  ///function scope>global scope
}

console.log(scope(1, 2)); // Output: 3
console.log(global)

// block scope

function check() {
    let age = 18;
    if (age >= 18) { // or try age === 18
        console.log("adult");

    }
}
check(); // Output: "adult"

// {
//     let a=8;
// }
// console.log(a)

//  for(let i=1;i<=6;i++){
//     console.log(i)
//  }
//  console.log(i)


// lexical scope
function outer(){
   let  a=4;
    let b=9;
    console.log(a+b);
    function inner(){
        console.log(a);
        
    }
    inner();
}


function outer() {
    let a = 4;
    let b = 9;
    console.log("Sum:", a + b);

    function inner() {
        console.log("Inner sees a:", a);
        // Stop here! No recursive call.
    }

    inner(); // 👈 Now we're actually calling inner
}

function outer() {
    let a = 4;
    let b = 9;
    console.log("Sum:", a + b);

    function inner() {
        console.log("Inner sees a:", a);
        // Stop here! No recursive call.
    }

    inner(); 
}

outer(); // Output: Sum: 13, Inner sees a: 4

let greet = "hello"; // global scope

function changeGreet() {
    let greet = "namaste"; // function scope
    console.log(greet);

    function innerGreet() {
        console.log(greet); // lexical scope
    }

    innerGreet();
}

console.log(greet);
changeGreet();

// function expression
let variable=function(a,b){
    console.log(a+b)
}
variable(3,4);
// ex2
let names=function(myName){
    console.log(myName)
}
names("priya");
names=function(){
     console.log("orry")
}

names()

// higher order functions

function wishagain(func,n){
    for( let i=1;i<=n;i++){
        func();
    }
    
}
let wish=function(){
    console.log("hello")

}
wish();
wishagain(wish,10);
wishagain(function(){console.log("good night")},10);

// higher order returns value
// let odd=function(n){
// console.log(!(n%2==0))
// }
// let even=function(n){
//     console.log(n%2==0)
// }



function test(request) {
    if (request === "odd") {
        return function(n) {
            console.log(!(n % 2 === 0)); // true for odd
        };
    } else if (request === "even") {
        return function(n) {
            console.log(n % 2 === 0); // true for even
        };
    } else {
        return function() {
            console.log("wrong");
        };
    }
}

let request = "odd";
let tester = test(request); // tester becomes the function
tester(8); // Output: false (since 8 is even)


// methods
const cal={
    add:function (a,b){
        console.log(a+b);
    },
    sub:function (a,b){
        console.log(a-b);
    },
    Mul:function (a,b){
        console.log(a*b)
    }}

cal.add(8,1)
// shorthand
// const cal={
//     add (a,b){
//         console.log(a+b);
//     },
//     sub (a,b){
//         console.log(a-b);
//     },
//     Mul (a,b){
//         console.log(a*b)
//     }
// }

// cal.add(8,1)
