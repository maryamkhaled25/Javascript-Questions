//================= This is some questions with there answers about javascript ===================



// 1- function to sum numbers
// function add (x,y){
//     return x + y
// }
// console.log(add(5 , 4));
 

//-------------------------------------------------------------------------

// 2- function to check if a given string is a palindrome
// function palindrome(str){
   
//     return str === str.split("").reverse().join("")
// }

// console.log(palindrome("arr"));


//-------------------------------------------------------------------------

// 3- program to reverse a given string
// function revString (str){
//     return str.split("").reverse().join("")

// }
// console.log(revString("roma"));

// or can be :
// const revString = (str)=> {return str.split("").reverse().join("")}
// console.log(revString("ali"));


//-------------------------------------------------------------------------

// 4- function that takes an array of numbers and returns a new array with only the even numbers.
// const newArr = (nums) => {
//    const newNums =  nums.filter(ele=> ele % 2 == 0)
//     return newNums
// }
// console.log(newArr([1,2,3,4,5]));

//or can be: 

// function evenNums (nums){
//     return  nums.filter(ele=> ele % 2 == 0)
    
// }
// console.log(evenNums([1,2,3,4,5]));


//-------------------------------------------------------------------------

// 5- function creates a copy of a nested object or array without any reference to the original.
// let arr = [[1,2],3,[4,5]]
// let deep = JSON.parse(JSON.stringify(arr)) // to copy arr or object 
// deep[0][1] = 10
// console.log(arr);
// console.log(deep);


//-------------------------------------------------------------------------

// 6- function to reverse a string without using the built-in reverse() method.
// function reversestring (str){ //Ali
//     let rev = ""
//     for(i = str.length - 1 ; i >= 0 ; i--){
    //         rev = rev + str[i]
    //     }
    //     return rev
    // }
    // console.log(reversestring("Ali"));
    
    
    
//-------------------------------------------------------------------------


// 7- function to find the sum of all the numbers in an array.
// 
// function sum (arr){
    //     let nums = 0
    //     for(i = 0 ; i<arr.length ; i++){
        //          nums = nums + arr[i]
        //     }
        //     return nums
// }
// console.log(sum([1,2,3]));

// or 
// function theSum (arr){
    //     return arr.reduce((sum,num)=> sum + num) //num is the itrration
    // }
    // console.log(theSum([1,2,3]));
    


//-------------------------------------------------------------------------



// 8- function that accepts a number and returns its factorial (e.g.,factorial of 5 is 5 x 4 x 3 x 2 x 1).
// function frac(num){ // 5
//     if (num === 0 || num === 1) return 1
//     else return num * frac(num -1)
// }
// console.log(frac(5));




//-------------------------------------------------------------------------


// 9- function that returns the average value of numbers in an array.
// function averageNum (arr){ //[1,2,3,4,5]
//     let sum = 0
//     for(i=0;i<=arr.length-1;i++){
    //         sum = sum + arr[i]  
    //     } 
    //     return sum/arr.length
    // }
    
    // console.log(averageNum([5,10,15,20]));
    
    
    // or:
    
    // function averageNum (arr){ //[1,2,3,4,5]
    //     let sum = 0
    //     for (const num of arr) { // for of 
    //         sum = sum + num
    //     }
    //     return sum/arr.length
    // }

    // console.log(averageNum([5,10,15,20]));
    
    
    
    
    
//-------------------------------------------------------------------------

// 10- function that finds the index of a specific element in an array.
// function findIndex (arr,num){
    //     let index = arr.indexOf(num) // return index of element in arr 
    //     return index !== -1 ? index: -1
    // }
    // console.log(findIndex([5,8,2,4],8));
    
    
    
//-------------------------------------------------------------------------


// // 11- check if a number is an integer?
// function checkInteger (num){
    //     return num % 1 === 0  //  the devision by 1 of interger number always 0  
    // }
    // console.log(checkInteger(12.5));

    // or: isInt()
    


//-------------------------------------------------------------------------



// 12- function that takes the age in years and returns the age in days.
// function convertAgeInDays (age){
//     let ageInDays = age * 365
//     return ageInDays
// }

// console.log(convertAgeInDays(4));










//-------------------------------------------------------------------------

// 13- function that takes the age in years and returns the age in days.
function modifyArr(arr,cb){
    arr.push(25)
    cb()
}
var arr = [1,2,3]
modifyArr(arr,function(){ //Anonymous function => without name
    console.log("Array is modified",arr);
})