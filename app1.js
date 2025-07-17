// // strings and arrays
// let password = prompt("Enter password");     // Use parentheses instead of curly braces
// let trimmedPassword = password.trim();       // Avoid using 'new' as a variable name
// console.log(trimmedPassword);  

let  text="ILoveCoding  ";
// b=text.toLowerCase();
// c=text.toUpperCase();
// console.log(b);
// console.log(c)
// d=text.indexOf("o")
// console.log(d);
e=text.toUpperCase().trim()
console.log(e)
f=text.slice(1,5);
console.log(f)
g=text.slice(-5)
console.log(g)
x=text.replace("Love","do");
console.log(x)
t=text.repeat(4)
console.log(t)

// arrays
// let a=["kites","orange","apple","parrot"]
// let n = a[0];
// let o = a[0][0];
// let q = a[0].length;
// console.log(n, o, q);
let a = ["kites", "orange", "apple", "parrot"];
console.log(a);            // ➜ ["kites", "orange", "apple", "parrot"]
console.log(a[0]);         // ➜ "kites" (first element)
console.log(a[0][0]);      // ➜ "k" (first character of "kites")
console.log(a[0].length);  // ➜ 5 (length of "kites")


// arrays are mutable
array=["apple","orange","pineapple"]
array[2]="watermelon"
console.log(array)
array[9]="papaya"
console.log(array)

week=["mon","tue","wed","thu"]
console.log(week.push("fri"))
console.log(week)
console.log(week.pop())
console.log(week)
console.log(week.unshift("sun"))
console.log(week)
console.log(week.shift())
console.log(week)
console.log(week.indexOf("wed"))
console.log(week.includes("sun"));   
console.log(week.concat(array)); 
console.log(week.reverse()); 
console.log(week)
console.log(week.slice(-2))
console.log(week.sort())

// splice
clas= ["abhi","laksh","sandy","lucky","daddy"]
console.log(clas.slice(2))
console.log(clas)
console.log(clas.splice(2,3,"ubi","orry","shardha"))
console.log(clas)
console.log(clas.sort())

// reference variable
// let arr=["1","2","3"]
// let arr1=arr;
// console.log(arr==arr1);

let arr = ['a', 'b'];
let arrCopy = arr;             // arrCopy references the same array as arr
arrCopy.push('c');             // Modifies both arr and arrCopy since they share reference

console.log(arrCopy);          // ➜ ['a', 'b', 'c']
console.log(arr);              // ➜ ['a', 'b', 'c']
console.log(arr == arrCopy);   // ➜ true (same reference)
// const array
const fruits = ["a", "b"];
fruits.push("c");            // Works fine
console.log(fruits);         // ➜ ["a", "b", "c"]

fruits = ["x", "y"];         // ❌ TypeError: Assignment to constant variable

// nested array 
let animals = [
  ["dog", "cat"],
  ["parrot", "pigeon"],
  ["lion", "tiger"]
];

console.log(animals);           // ➜ Full nested array
console.log(animals[0]);        // ➜ ["dog", "cat"]
console.log(animals[0][1]);     // ➜ "cat"
console.log(animals[2][0]);     // ➜ "lion"



