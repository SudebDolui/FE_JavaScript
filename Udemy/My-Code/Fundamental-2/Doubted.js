// Objects
'use strict';

const sudeb = {
    firstName : "Sudeb",
    lastName : "Dolui",
    birthYear : 1999,
    job : "Software Engineer",
    hasDriversLicense : true,

    calcAge : function(){
        this['age'] = 2021 - this.birthYear ;
        return this.age ;
    },

    getSummary : function() { // Arrow function could not be used as this method doesnt work in it.
         return `${this.firstName} ${this.lastName} is ${this['calcAge']()} years old and he is a ${this.job}. He has ${this.hasDriversLicense ? "got " : "no " }driver License.`
        // This statement can also be used return `${this.firstName} ${this.lastName} is ${this.calcAge()} years old and he is a ${this.job}. He has ${this.hasDriversLicense ? "got" : "no" }driver License.`
        } 
}

console.log(sudeb.getSummary());

//////////////////////////////////////////

// calcBMI : function(mass, height){ this.bmi = this.mass / this.height **2; return this.bmi;}
// bmi : calcBMI(this.mass, this.height) 
/*
    calcBMI : function(){
        this.bmi = this.mass / this.height **2;
        return this.bmi;
    }
*/
const calcBMI = function (mass, height) {console.log(mass); return mass / height ** 2;}

const mark = { 
    firstName : "Mark",
    lastName :"Miller",
    mass : 78,
    height : 1.69,
    bmi : calcBMI(this.mass, this.height)
 };
const john = { 
    firstName : "John",
    lastName :"Smith",
    mass : 92,
    height : 1.95,
    bmi : calcBMI(Number(this.mass), Number(this.height))
};

console.log(mark, john);
const nameKey = 'Name';
console.log(john[`first${nameKey}`]); // Using Template Literals.