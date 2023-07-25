// JavaScript was developed in 1995 by Brendan Eich. 
// Javascript always runs from top to bottom and It's value is assigned from right to left assignement.
// Naming Convention used is Camel Convention
let fullName = 'Sudeb Dolui'; // single quote ' or Double Quote " is used to define a string
// Always make a varilable name understandable. Example: const sudebAge;

let age = 21; // let is a block;
var job = "Associate Trainee";// var is a functional;
const height = 5.8;// const is a constant; 

/*
// DataTypes
->  Values : 1.) Object
             2.) Primitive

    Primitive Data Types :
-> Number 
let age = 21; // This is a number.
-> String
let fullname = "Sudeb Dolui"; // This is a number.
-> Boolean
let job = true; // This is a boolean type.
-> Undefined
let height; // This is undefined.
-> Null
-> Symbol(ES2015)
-> BigInt(ES2020)

JavaScript has dynamic typing so we dont need to manually define a data type.
The above things could be tested by using typeof().

*/

//typeof()
// It is a method which helps to find the data type of a variable.

console.log(typeof(height));// Returns number

//  Operators:
/*
-> Arithematic or Mathematical Operator (+, -, *, /, %, ++, --, **[power])
-> Bitwise Operator (&, |, ^, ~, <<, >>, >>>)
-> Relational Operator (=, ==, === [Strict equality(compares the data type to)], !=, !==, >, <, <=, >=)
-> Logical Operator (&&, ||, !, )
-> Assignement Operator (+=, -=, *=, /=, **=, %=, <<=, >>=, >>>=, &=, |=, ^= )
*/

// Operator precedence
/*

// Operator precedence and associativity in JavaScript

Operator	Operator Use	                                                                    Operator Associativity  	Operator Precedence
()	        Method/function call, grouping  	                                                    Left to right           	Highest — 1
[]      	Array access	                                                                        Left to right	            1
.	        Object property access	                                                                Left to right              	1
++	        Increment	                                                                            Right to left           	2
--      	Decrement                                                                               Right to left         	    2
-	        Negation	                                                                            Right to left	            2
!	        Logical NOT	                                                                            Right to left	            2
~	        Bitwise NOT	                                                                            Right to left	            2
delete  	Removes array value or object property	                                                Right to left	            2
new     	Creates an object	                                                                    Right to left	            2
typeof  	Returns data type	                                                                    Right to left	            2
void    	Specifies no value to return	                                                        Right to left	            2
/	        Division	                                                                            Left to right	            3
*	        Multiplication	                                                                        Left to right              	3
%	        Modulus                                                                             	Left to right	            3
+	        Plus	                                                                                Left to right	            4
+	        String Concatenation	                                                                Left to right	            4
-	        Subtraction	                                                                            Left to right	            4
>>	        Bitwise right-shift	                                                                    Left to right	            5
<<	        Bitwise left-shift	                                                                    Left to right	            5
>, >=	    Greater than, greater than or equal to	                                                Left to right	            6
<, <=	    Less than, less than or equal to	                                                    Left to right	            6
==	        Equality	                                                                            Left to right	            7
!=	        Inequality	                                                                            Left to right	            7
===	        Identity operator — equal to (and same data type)	                                    Left to right	            7
!==	        Non-identity operator — not equal to (or don't have the same data type)	                Left to right           	7
&	        Bitwise AND                                 	                                        Left to right	            8
^	        Bitwise XOR	                                                                            Left to right	            9
|	        Bitwise OR                                     	                                        Left to right           	10
&&      	Logical AND                                 	                                        Left to right           	11
||	        Logical OR	                                                                            Left to right           	12
?:	        Conditional branch	                                                                    Left to right	            13
=	        Assignment	                                                                            Right to left	            14
*=, /=, %=, +=,, -=, <<=, >>=, >>>=, &=, ^=, |=	Assignment according to the preceding operator	    Right to left	            14
,	        Multiple evaluation                         	                                        Left to right	            Lowest: 15

*/

// String and Tempelate literals

let firstName = 'Sudeb'; // This is a string. 
let lastName = "Dolui"; // This is also a string. 
console.log("My name is " + firstName + " " + lastName); // Normal way
console.log(`My name is ${firstName} ${lastName}`); // Using template literals
console.log(`My name is ${firstName, lastName}`); // Using like 
console.log('My name is ${firstName}'); // In a string literal the $ doesnt work.

// $ is a short for document.getElementById

// Prompt()
let value = prompt("Enter a value"); // Prompt is used to take input from a user.
console.log(value); //  Any input is taken as string



