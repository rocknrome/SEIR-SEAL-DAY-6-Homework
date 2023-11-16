/// R'N'R November 16, 2023


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
// Write a function named oddNumberCount which receives one argument that should be a number. The function should return how many positive odd numbers there are below the number passed into the argument.

// Example expected output:

// oddNumberCount(7) // => returns 3 (because [1, 3, 5] are the positive odd numbers below 7)
// oddNumberCount(16) // => returns 8 (because [1, 3, 5, 7, 9, 11, 13, 15] are the positive odd numbers below 7)