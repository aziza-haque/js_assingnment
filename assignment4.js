// p1:Here mindGame is a function where simple mathemmatics is done.
function mindGame (num){
    let multiplyThree =num*3;
    let addTen = multiplyThree +10;
    let divideByTwo = addTen/2;
    let subFive = divideByTwo-5;
    let requiredNum = subFive;
    console.log(requiredNum);
}
mindGame(50);

//p2:In this function after finding the character length then moved to either odd or even 

function evenOdd (name){
    let anyString = name;
    if(anyString.length%2 === 0){
        console.log("even");''
    }
    else{
        console.log("odd");
    }
}
evenOdd('Batch7');

//p3:this function is used to subtract 7 from a given number then 
//find if ans is small then print the ans othrwise double the given number

function isLGSeven (num){
    let subSeven = num-7;
    if (subSeven < 7){
        console.log(subSeven);
    }
    else{
        console.log(num*2);
    }

}
 isLGSeven(15);

//p4:this function seperate negative value and positive value and count the number of negative value.
function findingBadData(arr) {
    let badData =[];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            badData ++;
        }
    }
    return badData;
}

const num1 = [2,-5,-7,-13];
const result = findingBadData(num1);
console.log( result); 


//p5:this function finds the sum of all gems and compare is total gem less then 2000 or not.

function gemsToDiamond (friend1gems,friend2gems,friend3gems){
    const sumOfF1gems = friend1gems *21;
    const sumOfF2gems = friend2gems *32;
    const sumOfF3gems = friend3gems *43;
    const totalOfgems = sumOfF1gems+sumOfF2gems+sumOfF3gems;
    if(totalOfgems<2000){
        console.log(totalOfgems);
    }
    else{
        console.log(totalOfgems-2000)
    }
    return totalOfgems;
}
const totalOfgems =gemsToDiamond(20,200,50);
