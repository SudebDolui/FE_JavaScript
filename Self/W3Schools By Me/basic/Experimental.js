/**
 * 
 */
debugger;
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value) {
	console.log(total+" "+value+" = "+(total+value));
  return total + value;
}

console.log(sum);
console.log("<----------------------------------------------------------->");
// for in vs for of

var arr = [4,5,5];
arr.f = "Sudeb";

for (let index in arr){
	console.log(index);
}
console.log("<---------------------------------------------------------->")
for(let i of arr){
	console.log(i);
}

const add =(function () {
	let counter = 0;
	return function () {counter += 1; return counter}
  })();
 add();
 add();
 add();