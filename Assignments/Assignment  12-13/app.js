// Assignment 12-13 IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS
// Question 1
//Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

// var userInput = prompt("Enter a Character i.e. : a-z,A-Z,0-9")
//     var asciiCode = userInput.charCodeAt(0);
//     if (asciiCode >= 65 && asciiCode <= 90) {
//         alert(userInput + " is a uppercase letter")
//     }
//     else if (asciiCode >= 97 && asciiCode <= 122) {
//         alert(userInput + " is a Lowercase letter")
//     }
//     else if (asciiCode >= 48 && asciiCode <= 57) {
//         alert(userInput + " is a number")
//     }
//     else {
//         alert("Invalid Input")
//     }

    // Question 2
   // Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

//    var UserNumber1 = +prompt("Enter a number 1 ")
//     var UserNumber2 = +prompt("Enter a number 2 ")

//     if (UserNumber1 > UserNumber2) {
//         alert(UserNumber1 + " is greater than " + UserNumber2)
//     }
//     else if (UserNumber2 > UserNumber1) {
//         alert(UserNumber2 + " is greater than " + UserNumber1)
//     }
//     else if (UserNumber2 === UserNumber1) {
//         alert(UserNumber2 + " is equal to  " + UserNumber1)
//     }
//     else {
//         alert("Invalid Numbers")
//     }

    // Question 3
    // Write a program that takes input a number from user & state whether the number is positive, negative or zero.

    // var numberFinder = +prompt("Enter a number : ")

    // if (numberFinder > 0) {
    //     alert("Positive number")
    // }
    // else if (numberFinder < 0) {
    //     alert("Negative number")
    // }
    // else if (numberFinder === 0) {
    //     alert("Zero")
    // }
    // else {
    //     alert("Invalid Input")
    // }

    // Question 4
   // Write a program that takes a character (i.e. string of  length 1) and returns true if it is a vowel, false otherwise

//    var alphabet = prompt("Enter a character (a-z, A-z)");
// if ((alphabet == "a") || (alphabet == "A") || (alphabet == "e") || (alphabet == "E") || (alphabet == "i") || (alphabet == "I") || (alphabet == "O") || (alphabet == "o") || (alphabet == "u") || (alphabet == "U")) {
//        alert(true)
//    }
//    else {
//        alert(false)}

       // Question 5
 // Write a program that a. Store correct password in a JS variable. b. Asks user to enter his/her passwor

// var actualPass = "Amna123";
//     var InputPass = prompt("Enter a Password");
//     if (InputPass === actualPass) {
//         alert("Correct! The password you entered matches the original password")
//     }
//     else if (InputPass == "") {
//         alert("Please enter your password")
//     }
//     else {
//         alert("Incorrect password")
//     }

    // Question 6
  //  This if/else statement does not work. Try to fix it: var greeting; var hour = 13; if (hour < 18) { greeting = "Good day"; else greeting = "Good evening";}

//   var greeting;
//   var hour = 13;
//   if (hour < 18) {
//       greeting = "Good day";
//       alert(greeting)
//   }
//   else {
//       greeting = "Good evening";
//       alert(greeting)
//   }

    // Question 7
  //  Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

//   var userInput = +prompt("Enter a time in 24 hours clock format like: 1900 = 7pm.")
//     if (userInput >= 0000 && userInput < 1200) {

//         alert("Good Morning !")
//     }
//     else if (userInput >= 1200 && userInput < 1700) {
//         alert("Good Afternoon !")
//     }
//     else if (userInput >= 1700 && userInput < 2100) {
//         alert("Good Evening!")
//     }
//     else if (userInput >= 2100 && userInput < 2359) {
//         alert("Good Night !")
//     }
//     else {
//         alert("Invalid time format")
//     }