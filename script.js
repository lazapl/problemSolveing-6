/*Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".


function sevenBoom(arr) {
    
    const joinedArray = arr.join('');

   
    if (joinedArray.includes('7')) {
        return "Boom!";
    } else {
        return "there is no 7 in the array";
    }
}


console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));  // Boom!
console.log(sevenBoom([8, 6, 33, 100]));        // there is no 7 in the array"
console.log(sevenBoom([2, 55, 60, 97, 86]));    // Boom!

-----------------------------------------------------------------------------------*/



/*A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

function countBoomerangs(arr) {
    let count = 0;

    for (let i = 0; i < arr.length - 2; i++) {
        let firstDigit = arr[i];
        let middleDigit = arr[i + 1];
        let lastDigit = arr[i + 2];

        if (firstDigit === lastDigit && firstDigit !== middleDigit) {
            count++;
        }
    }

    return count;
}

// Examples
console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));  // Output: 2
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]));    // Output: 1
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]));    // Output: 0

-----------------------------------------------------------------------------------*/ 


/*Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

function oddishOrEvenish(num) {
    // Convert the number to a string to extract individual digits
    const digits = String(num).split('').map(Number);

    // Calculate the sum of the digits
    const sum = digits.reduce((acc, digit) => acc + digit, 0);

    // Check if the sum is odd or even
    if (sum % 2 === 0) {
        return "Evenish";
    } else {
        return "Oddish";
    }
}


console.log(oddishOrEvenish(43));    // Output: "Oddish"
console.log(oddishOrEvenish(373));   // Output: "Oddish"
console.log(oddishOrEvenish(4433));  // Output: "Evenish"


-----------------------------------------------------------------------------------*/

/*Create a function that takes two dates and returns the number of days between the first and second date.

function getDays(date1, date2) {
    
    const timeDifference = date2 - date1;

   
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
}


console.log(getDays(new Date("June 14, 2019"), new Date("June 20, 2019")));  // Output: 6
console.log(getDays(new Date("December 29, 2018"), new Date("January 1, 2019")));  // Output: 3
console.log(getDays(new Date("July 20, 2019"), new Date("July 30, 2019")));  // Output: 10

-----------------------------------------------------------------------------------*/


/*Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.


function numInStr(arr) {
    const result = [];

    for (const str of arr) {
        for (const char of str) {
            if (!isNaN(parseInt(char))) {
                result.push(str);
                break;
            }
        }
    }

    return result;
}

console.log(numInStr(["1a", "a", "2b", "b"]));  // Output: ["1a", "2b"]
console.log(numInStr(["abc", "abc10"]));         // Output: ["abc10"]
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));  // Output: ["ab10c", "a10bc"]
console.log(numInStr(["this is a test", "test1"]));  // Output: ["test1"]


-----------------------------------------------------------------------------------*/