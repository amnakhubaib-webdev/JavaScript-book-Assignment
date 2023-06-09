// Assignment 9-11 USER INPUT & CONDITIONAL STATEMENT
// Question no 1
// Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

// var city = prompt("please enter a city name");
// if (( city === "karachi" || city === "Karachi")) {
//     alert("Welcome to city of lights");
// }
// else {
//     alert("Invalid Input")}
    
// Question no 2
// Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

// var gender = prompt("please enter a gender Male or Female");
// if (gender === "male" || gender === "Male") {
//     alert("Good Morning Sir");
// }
// else if ((gender === "female" || gender === "Female") ){
//     alert("Good Morning Ma’am");
// }

// else {
//     alert("Invalid Gender");
// }

// Question no 3
// Write a program to take input color of road traffic signal from the user & show the message according to this table:

// var color = prompt("Enter a color which traffic follows - Red, Green, Yellow");
//     if ((color === "red") || (color === "Red")) {
//         document.write(`
//         <table class="my-table">
//         <tr>
//           <th>Signal color</th>
//           <th>Message</th>
//         </tr>
       
//         <tbody>
//           <tr>
//             <td>Red</td>
//             <td>Must Stop</td>
//           </tr>      
//         </tbody>
//       </table>`);
//     }
//     else if ((color === "yellow") || (color === "Yellow")) {
//         document.write(`
//         <table class="my-table">
//         <tr>
//           <th>Signal color</th>
//           <th>Message</th>
//         </tr>
       
//         <tbody>
//           <tr>
//             <td>${color}</td>
//             <td>Ready to move</td>
//           </tr>      
//         </tbody>
//       </table>`);
//     }
//     else if ((color === "green") || (color === "Green")) {
//         document.write(`
//         <table class="my-table">
//         <tr>
//           <th>Signal color</th>
//           <th>Message</th>
//         </tr>
//        <tbody>
//           <tr>
//             <td>${color}</td>
//             <td>Move now</td>
//           </tr>      
//         </tbody>
//       </table>`)}
//     else {
//         document.write(`
//         <table class="my-table">
//         <tr>
//           <th>Signal color</th>
//           <th>Message</th>
//         </tr>
       
//         <tbody>
//           <tr>
//           <td>${color}, Invalid Color</td>
//             <td>No Message Found</td>
//           </tr>      
//         </tbody>
//       </table>`)}

// Question no 4
// Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

// var remainingFuel = +prompt("Please enter the remaining fuel in your car");
// if (remainingFuel < 0.25) {
//     alert("Please refill the fuel in your car")
// }
// else {
//     alert("No need to refill the fuel in your car")
// }

// Question no 5
// Run this script, & check whether alert message would be displayed or not.

// var a = 4;
//     if (++a === 5) {
//         alert("given condition for variable a is true");
//     }
//     var b = 82;
//     if (b++ === 83) {
//         alert("given condition for variable b is true");
//     }
//     var c = 12;
//     if (c++ === 13) {
//         alert("condition 1 is true");
//     }
//     if (c === 13) {
//         alert("condition 2 is true");
//     }
//     if (++c < 14) {
//         alert("condition 3 is true");
//     }
//     if (c === 14) {
//         alert("condition 4 is true");
//     }
//     var materialCost = 20000;
//     var laborCost = 2000;
//     var totalCost = materialCost + laborCost;
//     if (totalCost === laborCost + materialCost) {
//         alert("The cost equals");
//     }
//     if (true) {
//         alert("True");
//     }
//     if (false) {
//         alert("False");
//     }
//     if ("car" < "cat") {
//         alert("car is smaller than cat");
//     }

// Question no 6
// Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page


// var StdObtainedSub1 = + prompt("Enter a obtain marks  of sub 1 : ");
// var StdObtainedSub2 = + prompt("Enter a obtain marks  of sub 2 :");
// var StdObtainedSub3 = + prompt("Enter a obtain marks  of sub 3 :");
// var totalMarksSub = + prompt("Enter a total marks of 3 subject :");
// var stdTotalObtMarks = StdObtainedSub1 + StdObtainedSub2 + StdObtainedSub3;
// var percentage = (stdTotalObtMarks / totalMarksSub) * 100;
// if (percentage >= 80) {
//     document.write(`
//             <h1>Mark Sheet</h1>
//            <h2>Total Marks : ${totalMarksSub}</h2>
//             <h2>Marks Obtained : ${stdTotalObtMarks}</h2>
//             <h2>Percentage : ${percentage}%</h2>
//             <h2>Grade : Grade A-one</h2>
//             <h2>Remarks : Excellent </h2>
//     `)
// }
// else if (percentage >= 70) {
//     document.write(`
//             <h1>Mark Sheet</h1>
//            <h2>Total Marks : ${totalMarksSub}</h2>
//             <h2>Marks Obtained : ${stdTotalObtMarks}</h2>
//             <h2>Percentage : ${percentage}%</h2>
//             <h2>Grade : Grade A</h2>
//             <h2>Remarks : Good </h2>`)
// }
// else if (percentage >= 60) {
//     document.write(`
//             <h1>Mark Sheet</h1>
//            <h2>Total Marks : ${totalMarksSub}</h2>
//             <h2>Marks Obtained : ${stdTotalObtMarks}</h2>
//             <h2>Percentage : ${percentage}%</h2>
//             <h2>Grade : Grade B</h2>
//             <h2>Remarks : You need to improve </h2> `)
// }
// else {
//     document.write(`
//         <h1>Mark Sheet</h1>
       
//         <h2>Total Marks : ${totalMarksSub}</h2>
//         <h2>Marks Obtained : ${stdTotalObtMarks}</h2>
//         <h2>Percentage : ${percentage}%</h2>
//         <h2>Grade : Fail </h2>
//         <h2>Remarks : Sorry </h2>`)
// }

// Question no 7
// Guess game:Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number.a. If user guesses the same number, show “Bingo! Correct answer”.b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”

// var user = +prompt("Guess a  secret number between 1 to 10");
//     var guessNo = 2;
//     if (user === guessNo) {
//         alert("booyah! Correct answer")
//     }
//     else if (user === ++guessNo) {
//         alert("Close enough to the correct answer")
//     }
//     else {
//         alert("Sorry! Incorrect answer")}

// Question no 8
// Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

// var number = +prompt("Enter a number : ");
//     if (number % 3 == 0) {
//         alert('divisible by 3')
//     }
//     else {
//         alert("not divisible by 3")
//     }

// Question no 9
// Write a program that checks whether the given input is an even number or an odd number

// var number = +prompt("Enter a number : ");
//     if (number % 2 == 0) {
//         alert('Even Number')
//     }
//     else {
//         alert("Odd Number")
//     }

// Question no 10
// Write a program that takes temperature as input and shows a message based on following criteria a. T > 40 then “It is too hot outside.” b. T > 30 then “The Weather today is Normal.” c. T > 20 then “Today’s Weather is cool.” d. T > 10 then “OMG! Today’s weather is so Cool.”

// var temperature = prompt("Enter a temperature : ");
//     if (temperature >= 40) {
//         alert("It is too hot outside.");
//     }
//     else if ((temperature >= 30)) {
//         alert("The Weather today is Normal.");
//     }
//     else if ((temperature >= 20)) {
//         alert("Today’s Weather is cool.");
//     }
//     else if ((temperature >= 10)) {
//         alert("OMG! Today’s weather is so Cool.");
//     }
//     else {
//         alert("Today’s weather is so Cool.");
//     }

    // Question no 11
    // Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:a. First number b. Second number c. Operation (+, -, *, /, %) Compute & show the calculated result to user

    // var num1 = +prompt("Enter a number 1");
    // var num2 = +prompt("Enter a number 2 ");
    // var operation = prompt("Enter an operation (+, -, *, /, %) : ");
    // var result = 0;
    // if (operation === "+") {
    //     result = num1 + num2;
    //     alert(`Addition of ${num1} & ${num2} is ${result}`)
    // }
    // else if (operation === "-") {
    //     result = num1 - num2;
    //     alert(`Subtraction of ${num1} & ${num2} is ${result}`)
    // }
    // else if (operation === "*") {
    //     result = num1 * num2;
    //     alert(`Multiplication of ${num1} & ${num2} is ${result}`)
    // }
    // else if (operation === "/") {
    //     result = num1 / num2;
    //     alert(`Division of ${num1} & ${num2} is ${result}`)
    // }
    // else if (operation === "%") {
    //     result = num1 % num2;
    //     alert(`Remainder of ${num1} & ${num2} is ${result}`)
    // }
    // else {
    //     alert("Invalid Operation");
    // }