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

    const result = str.replace(vowelsRemover, '');

 return result;
}
console.log(trollsBeGone('This website is for losers LOL'));
// Example expected output:

// trollsBeGone("This website is for losers LOL") // => returns "Ths wbst s fr lsrs LL"