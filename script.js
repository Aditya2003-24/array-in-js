const array1 = [10,20,30,50]; //array literal
const array2 = new Array(1,2,3,4);
const array3 = [];
array3[0] = "BMW";
array3[1] = "audi";
array3[2] = "porche";

console.log(array1);
console.log(array2);
console.log(array3);

//length
console.log(array2.length);

const mixed = [1,2,"Hello",{name:"john",age:45},[20,40,50]];

console.log(mixed[3].name);
console.log(mixed[4][0]);



 let text = "<ol>";
for(let i=0;i<array1.length;i++){
    text += "<li>" + array1[i] + "</li>"
    
    
}
text += "</ol>";
document.getElementById("demo").innerHTML = text;

//map and foreach

 const number2 = [100,200,300,400];
 const number3 = [100,200,300,400];
const newArray = array1.concat(number2,number3);
console.log(newArray);



//push, pop, shift, unshift array methods

const names = ["lalit","semon","nikhil","aditya","ansh"];
// adds a new element to the end of the array
names.push("akshay");
console.log(names);

//removes an element from the end of the array
names.pop("akshay");
console.log(names);

// adds a new element to the start of the array
names.shift("krishna");
console.log(names);

//removes an element from the start of the array
names.unshift("krishna");
console.log(names);