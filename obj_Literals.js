let students = {
    name: "Madhuri",
    age: 20,
    city: "adb",
    parents:["dad","sulochana"]

};
console.log(students);
const post ={
    user:"arya",
    content:"file",
    like:900,
    repost:["b","a"],
    tags:900

};
console.log(post);
console.log(post.like);
console.log(post["content"]);
console.log(post.repost[0]);

let prop="user";
console.log(post[prop]);

// #to update
console.log(post.user="guddy");
// to add
console.log(post.dislikes=200);
// to delete;
console.log(delete post.repost);
console.log(post);

// nesting

const Student = {
    adi: {
        stan: 5,
        city: "delhi"
    },
    abhi: {
        stan: 6,
        city: "delhi"
    },
    addy: {
        stan: 7,
        city: "delhi"
    }
};
console.log(Student);

const Students = [
    {
        name: "adi",
        stan: 5,
        city: "delhi"
    },
    {
        name: "abhi",
        stan: 6,
        city: "delhi"
    },
    {
        name: "addy",
        stan: 7,
        city: "delhi"
    }
];
console.log(Students);
console.log(Students[0]);
console.log(Students[0].name);

// math object

let num = Math.random();      // Generates a random decimal between 0 (inclusive) and 1 (exclusive)
num = num * 10;               // Scales it up to a range from 0 to just under 10
num = Math.floor(num);        // Rounds down to the nearest whole number (0–9)
num = num + 1;                // Shifts the range to 1–10
console.log(num);             // Prints the final number to the console

num1=Math.floor(Math.random()*10)+1;
console.log(num1); 
num1=Math.floor(Math.random()*5)+128;
