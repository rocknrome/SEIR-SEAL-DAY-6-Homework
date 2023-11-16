/// R'N'R November 16, 2023


//////////////////////////////////////////
//setAlarm
//Write a function named setAlarm that has two arguments.
const setAlarm = (employed, vacationing) => {
//lets incorporate the IF statement to check if employed and NOT vacationing
if(employed && !vacationing) { //means employed and working (not vacationing)
    return true;
} else {
    return false;
}
}
//printing the result
console.log(setAlarm(true, false)) //passing true/true argument
//The first argument: employed (the boolean true would be passed in as a parameter whenever you are employed)
//The second argument: vacationing (the boolean true would be passed in as a parameter whenever you are on vacation)
//The function should only return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm, of course!). It should return false otherwise.

//Example expected output:

//setAlarm(true, true) // => returns false
//setAlarm(false, false) // => returns false
//setAlarm(false, true) // => returns false
//setAlarm(true, false) // => returns true
console.log('****************************'); //visual task separator



//////////////////////////////////////////
// Count Odd Numbers
// Write a function named oddNumberCount which receives one argument that should be a number. 
//The function should return how many positive odd numbers there are below the number passed into the argument.
const oddNumberCount = (number) => { //declaring the function
    let count = 0; //setting up counter to keep our intermediate results
        for( let i = 1; i < number ; i++) { //FOR loop between the 0 and a given number/variable
                                            // i = 1, not 0
            if (i % 2 !== 0) { //checking if odd
                count++;
            }
        }
    return count; //function has to have return to avoid undefined result
}
console.log(oddNumberCount(16)); //invoking the function within the console.log
// Example expected output:

// oddNumberCount(7) // => returns 3 (because [1, 3, 5] are the positive odd numbers below 7)
// oddNumberCount(16) // => returns 8 (because [1, 3, 5, 7, 9, 11, 13, 15] are the positive odd numbers below 7)
console.log('****************************'); //visual task separator



//////////////////////////////////////////
// Disemvoweling Trolls
// Trolls are attacking your comment section! Let's neutralize the threat by removing all vowels from their comments. That'll make them look real silly.

// Write a function named trollsBeGone which receives one argument that should be a sentence (a string). 
//The function should return a new string with all the vowels removed from the original string.
const trollsBeGone = (str) => {
    //PSEUDOCODING:
    //1. Check for vowels in the given string
    //2. remove those
    //3. return the result. Will need an intermediate variable "result"
    
    const vowelsRemover = /[aeiouAEIOU]/g //method of identifiyng vowels in the string https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-8.php

    const result = str.replace(vowelsRemover, '');  //replace method used 
                                                    //also can be written as: str.replace([aeiou]gi, '');
                                                    ///gi flag is case insencitive (both casings included)

 return result;
}
console.log(trollsBeGone('This website is for losers LOL'));
// Example expected output:

// trollsBeGone("This website is for losers LOL") // => returns "Ths wbst s fr lsrs LL"
console.log('****************************'); //visual task separator



//////////////////////////////////////////
// Bank Account Summary
// Make an object named bankInfo with your banking info that includes the keys listed below. Each key should have a number value that can either be negative or positive (e.g. -500 or 500)
let bankInfo = {
    savings: 600,
    checking: 800,
    moneyMarket: 200,
    creditCard: -2000,
}

const bankAccountSummary = () => {
    let StatementInfo = 0; //initial value of the accounts total
        for(let key in bankInfo) { //loop to iterate thru every key in the object
            StatementInfo += bankInfo[key]; //adding up values of the object keys
        }
        return StatementInfo; //mandatory part of the function construct. returning total for the object keys values
};

const bankTotal = bankAccountSummary(); //new variable for easier manipulation
// savings
// checking
// moneyMarket
// creditCard
// Write a function called bankAccountSummary that accepts your bankInfo object as an argument. 
//The function should calculate the total of your bank account and return it.
console.log(bankTotal);
// Example expected output:

// // assume my bankInfo values are: 600, 800, 200, -2000
// bankAccountSummary(bankInfo) // returns -400
// Save your bankAccountSummary total to a variable called bankTotal
console.log('****************************'); //visual task separator
// Write another function called inTheRed that accepts your bank account summary total (number) as an argument. 
//The function should return true if your total is less than 0, and false otherwise.
let inTheRed = (calc) => { //declaring the function
if (calc <= 0) { //checking if bank total is <=0 or not
    return true; //part of the function construct. returning boolean if matches the condition
} else {
    return false; //returning false if not matching the condition
}
}
inTheRed(bankTotal); //invoking function
console.log(inTheRed(bankTotal)); //logging the result with the bankTotal as argument
// Example expected output:

// // assume my bank total is -400
// inTheRed(bankTotal) // returns true
console.log('****************************');