// Exercise 5.1
// let maxValue = 5
// let randomNum = Math.floor(Math.random() * maxValue) + 1
// console.log("solution " + randomNum);
// let correctans = false
// while (!correctans) {
//     let userValue = prompt("Enter the Number between 1 and 5");
//     userValue = parseInt(userValue);
//     if (userValue === randomNum) {
//         correctans = true
//         console.log("Congratulations! You guessed the correct number!");
//     } else if (userValue < randomNum) {
//         console.log("Too high! Try again.");
//     } else {
//         console.log("Too low! Try again.");
//     }
// }
// console.log("Game Over. Thanks for playing!");
// Exercise 5.2
let startingCount = 0
let step = 10
do {
    console.log("The counter is " + startingCount);
    startingCount = +step
} while (startingCount <= 100);
// Exercise 5.3
let myWork = []
for (i = 1; 1 <= 10; i++) {
    let status = 1 % 2 == 0 ? false : true
    let lesson ={
        name:"Lesson" + i,
        status :status
    }
    myWork.push(i)
}
console.log(myWork);
// Exercise 5.4
let myTable = []
let rows=3
let column=4
let counter1=0
for(let i=0;i<rows;i++){
    tempTable=[]    
    for (let j=0; j <columns; j++) {
        counter1++
        tempTable.push(counter1) 
    }
    myTable.push(tempTable)
}
console.table(myTable);
// PRACTICE 5.5

let grid = [];
let numberOfCells = 64;
let counter = 0;


let row = [];


for (let i = 0; i <= numberOfCells; i++) {

    if (counter % 8 === 0) {

        if (row.length > 0) {

            grid.push([...row]);
        }
        row = [];
    }
    counter++;

    let temp = counter;
    row.push(temp);


    if (counter === numberOfCells) {

        grid.push([...row]);
    }
}
console.log(grid);


// PRACTICE 5.6



let myArray = [];
for (let i = 0; i < 10; i++) {
    myArray.push(i);
}
console.log("Array:", myArray);

for (let j = 0; j < myArray.length; j++) {
    console.log("For Loop - Element at index", j, ":", myArray[j]);
}

for (const element of myArray) {
    console.log("For Of Loop - Element:", element);
}



//PRACTICE 5.7


let myObject = {
    item1: 'value1',
    item2: 'value2',
    item3: 'value3',
  };
  console.log('Object Properties and Values:');
  for (let key in myObject) {
    console.log(key + ': ' + myObject[key]);
  }
  let myArray2= ['value1', 'value2', 'value3'];
  
  console.log('\nArray Values:');
  for (let i = 0; i < myArray2.length; i++) {
    console.log('Index ' + i + ': ' + myArray2[i]);
  }
  

  //PRACTCE 5.8

  let outputString = '';
let skipNumber = 3;

for (let i = 1; i <= 10; i++) {
  if (i === skipNumber) {
    continue;
  }
  outputString += i;
}
console.log('Output with "continue":', outputString);
outputString = '';

for (let i = 1; i <= 10; i++) {
  if (i === skipNumber) {
    break;
  }
  outputString += i;
}
console.log('Output with "break":', outputString);



// Chapter project
// Math multiplication table
let multiplicationTable = [];
let numberOfValues = 10; 
for (let i = 1; i <= numberOfValues; i++) {
  let tempRow = [];
  for (let j = 1; j <= numberOfValues; j++) {
    tempRow.push(i * j);
  }
  multiplicationTable.push(tempRow);
}

console.log('Multiplication Table:');
for (let i = 0; i < multiplicationTable.length; i++) {
  console.log(multiplicationTable[i].join('\t'));
}



