///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1,]
const galaAcres = [5, 2, 4, 3, 6, 2, 4,]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4,]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/



let totalAcres = 0


// console.log(totalAcres)

for(let i = 0; i < fujiAcres.length; i++){
   totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i]
}

console.log(totalAcres)

// i am forgetting how to show the sum *cries*
// after an hour of trying to figure it out, I asked Lukas and he reminded me that I had to declare the variable before the loop --- DUH



// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

let averageDailyAcres = (totalAcres / fujiAcres.length) // OR (totalAcres / 7)
console.log(averageDailyAcres)

// You divide the total acres by the number of days they harvested to find the average of acres per day.

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

while ( acresLeft > 0){ 
days++; acresLeft -= 9;
}

console.log(days)

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = fujiAcres.slice()
let galaTons = galaAcres.slice()
let pinkTons = pinkAcres.slice()

for ( i = 0; i <fujiAcres.length; i++){
    fujiTons[i] *=6.5
    galaTons[i] *=6.5
    pinkTons[i] *=6.5
}

console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)

// I got this code to work and show the total tons of each acre, but the numbers are displaying a little wonky and not in a straight line. Not sure how to fix that :/




// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

let totalFujiTons = 0
let totalGalaTons = 0
let totalPinkTons = 0

for (let i = 0; i < 7; i++){
   totalFujiTons += fujiTons[i]
   totalGalaTons += galaTons[i]
   totalPinkTons += pinkTons[i]
}

console.log(totalFujiTons)
console.log(totalGalaTons)
console.log(totalPinkTons)

let fujiPounds = totalFujiTons*2000
let galaPounds = totalGalaTons*2000
let pinkPounds = totalPinkTons*2000

for (let i = 0; i <7; i++){
    fujiPounds[i]
    galaPounds[i]
    pinkPounds[i]
}

console.log(fujiPounds)
console.log(galaPounds)
console.log(pinkPounds)

//this was a doozy but i think i got it right!!!! ????? maybe i just did it a hard way lol
//I first had to create a variable for the total tons so then I could run the loop to get the sum of them all together.
//Then i could set the pounds to the total tons * 2000 and then run them in the loop to add them together 

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = (fujiPounds * fujiPrice)
let galaProfit = (galaPounds * galaPrice)
let pinkProfit = (pinkPounds * pinkPrice)

console.log(fujiProfit)
console.log(galaProfit)
console.log(pinkProfit)






// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

let totalProfit = (fujiProfit + galaProfit + pinkProfit)


console.log(totalProfit)

/// Are these last two problems really that simple or did I misunderstand the assignment??? lmaooo