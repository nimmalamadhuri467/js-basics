// for loop
// for(let i=1;i<=5;i++){
//     console.log(i);
// }
// for(let i=10;i>=1;i--){
//       console.log(i);
// }

// for (let i = 3; i <= 20; i += 3) {
//     console.log(i);
// }

for(let i=1;i<=15;i+=2){
    console.log(i);
}
for(let i=2;i<=10;i+=2){
    console.log(i);
}
for (let i = 1; i <= 10; i++) {
    console.log(`3 x ${i} = ${3 * i}`);
}
// tables fro prompt
// let n=prompt("enter");
// n=parseInt(n);
// for(let i=n;i<=n*10;i=i+n){
//     console.log(i)
// }

// nested loops
for(let i=1;i<=3;i++){
    console.log(`outer loop ${i}`)
    for(j=1;j<=3;j++)
        console.log(j)
}

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

// while loop
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
// break keyword
let a = 1;
while (a <= 5) {
    if (a == 3) {
        break;
    }
    console.log(a);
    a++;
}
// arrays using loops
let fruits=["a","b","c","d","e"]
for(i=0;i<fruits.length;i++){
console.log(i,fruits[i])
}

// nested arrays using loop
let colors = [["yellow", "orange", "red"], ["black", "blue", "violet"]];

for (let i = 0; i < colors.length; i++) {
    console.log(i,colors[i])
    for (let j = 0; j < colors[i].length; j++) {
        console.log(colors[i][j]);
    }
}

// let students=[["ben",78],["joe",90],["paddy",89]];
// for(let i=0;i<students.length;i++){
//     console.log(i,students[i]);
//     for(let j=0,j<students[i].length;j++){
//         console.log(students[i][j])}
// }
let students = [["ben", 78], ["joe", 90], ["paddy", 89]];

for (let i = 0; i < students.length; i++) {
    console.log("Student index:", i);
    for (let j = 0; j < students[i].length; j++) {
        console.log("  ", students[i][j]);
    }
}
// for of loop ,and nested loops
funs=["apple","banana","kites","god"];
for (fun of funs){
    console.log(fun)
}


let heroes = [
  ["apple", "banana", "kites", "god"],
  ["yellow", "orange", "red"],
  ["black", "blue", "violet"]
];

for (let list of heroes) {
  console.log("List:");
  for (let hero of list) {
    console.log("  " + hero);
  }
}
