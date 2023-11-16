JavaScript Problems Potpourri and MadLibs
Utilize all the concepts you've learned thus far to solidify your knowledge!

Learning Objectives
Programmatic Thinking
Working with functions and objects
Interactivity with the browser
Prerequisites
JavaScript
Interactivity with the browser
JavaScript Problems Potpourri


Getting Started
Create a file called solutions.js inside of tonight's homework folder and work in there for the problems below
setAlarm
Write a function named setAlarm that has two arguments.

The first argument: employed (the boolean true would be passed in as a parameter whenever you are employed)
The second argument: vacationing (the boolean true would be passed in as a parameter whenever you are on vacation)
The function should only return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm, of course!). It should return false otherwise.

Example expected output:

setAlarm(true, true) // => returns false
setAlarm(false, false) // => returns false
setAlarm(false, true) // => returns false
setAlarm(true, false) // => returns true
Count Odd Numbers
Write a function named oddNumberCount which receives one argument that should be a number. The function should return how many positive odd numbers there are below the number passed into the argument.

Example expected output:

oddNumberCount(7) // => returns 3 (because [1, 3, 5] are the positive odd numbers below 7)
oddNumberCount(16) // => returns 8 (because [1, 3, 5, 7, 9, 11, 13, 15] are the positive odd numbers below 7)
Disemvoweling Trolls
Trolls are attacking your comment section! Let's neutralize the threat by removing all vowels from their comments. That'll make them look real silly.

Write a function named trollsBeGone which receives one argument that should be a sentence (a string). The function should return a new string with all the vowels removed from the original string.

Example expected output:

trollsBeGone("This website is for losers LOL") // => returns "Ths wbst s fr lsrs LL"
Bank Account Summary
Make an object named bankInfo with your banking info that includes the keys listed below. Each key should have a number value that can either be negative or positive (e.g. -500 or 500)

savings
checking
moneyMarket
creditCard
Write a function called bankAccountSummary that accepts your bankInfo object as an argument. The function should calculate the total of your bank account and return it.

Example expected output:

// assume my bankInfo values are: 600, 800, 200, -2000
bankAccountSummary(bankInfo) // returns -400
Save your bankAccountSummary total to a variable called bankTotal

Write another function called inTheRed that accepts your bank account summary total (number) as an argument. The function should return true if your total is less than 0, and false otherwise.

Example expected output:

// assume my bank total is -400
inTheRed(bankTotal) // returns true
MadLibs


Mad libs was invented in 1953 and is a phrase template word game - where one player prompts others for a list of words to substitute for blanks in a story, before reading the - often comical or nonsensical - story aloud - wikipedia

For this section of the homework, you'll be creating a simple version of it on the browser to practice interactivity and accepting user input!

Getting Started
Create a directory called mad_libs inside of tonight's homework folder
Inside the mad_libs directory, create the following files: app.js and index.html
In your index.html, add the HTML boilerplate
Connect your app.js to your index.html
Test the connection by adding a console.log to your app.js and check your browser's dev tools console to make sure you can see the log! If you can, your connection was successful
Building an Object
First, create an object called words with the keys given below. Each key's property should be an empty string. This is where we will save the user's input later.

The keys:

number
adjective
plural noun (pluralNoun)
adverb
another adjective (anotherAdjective)
Interact With the User
Now that we have our object set up, we want to work on accepting user input so that we can save it to the object.

Start by creating a function called startMadlib that prompts a user to enter each word type and save their input to the appropriate object key. For example, the following prompt's user input should be saved to the number key in our words object:



To make sure you accepted all the user's input and saved it correctly, console.log your object after all the prompts are complete. After filling out all the prompts, you should thus see something like the following in the browser console:



Create the Tech Startup MadLib Story!
Now that we've accepted the user's input and saved it to the object, we can use those values to create a MadLib!

Use the following story and concatenate or interpolate the values from the object into it.

Once upon a time a group of _____(number) General Assembly graduates
got together and made a startup called _____ (adjective) Technologies.
Their goal was to create smart _____(plural noun).
They approached the challenge _____ (adverb)
which ultimately lead them to _______(another adjective) fame.
Finally, once the user finishes submitting all prompts, they should be alerted of the story they've created! For example:



