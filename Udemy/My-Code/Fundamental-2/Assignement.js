const population = [350, 152, 85, 800];
console.log(population.length === 4);

function percentageOfWorld (population) {
    const worldPopulation = 7900;
    const calcPercentage = (population / worldPopulation) * 100;
    return calcPercentage;
}

const percentage = [percentageOfWorld(population[0]) , percentageOfWorld(population[1]), percentageOfWorld(population[2]), percentageOfWorld(population[3])];
console.log(percentage);

let sent = ["Wow", "it's", "an", "amazing", "lecture"];
let sentence = sent.toString();
let arrayReplace = ["amazing", "Amazing"];
let replaced = sentence.replace(arrayReplace[0],arrayReplace[1]);
console.log(replaced);
 
/*
* MyMethod 
** Method is highlighted.
! Important
? 
//
@  
todo : 
*/