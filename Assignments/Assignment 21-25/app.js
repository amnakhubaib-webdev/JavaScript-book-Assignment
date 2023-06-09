// Chapter 21-25 STRING METHODS
// Question 1

// var fname = prompt("Enter your first Name : ");
// var lname = prompt("Enter your last Name : ");
// var fullName = fname + " " + lname;
// document.write("Welcome " + fullName);

// // Question 2 
// var mobile = prompt("Enter your favorite Mobile : ")
// var lengthOfMobile = mobile.length;
// document.write("My favorite mobile is " + mobile + "<br> Length of string : " + lengthOfMobile);
   
// // Question 3 

// var stringGiven = "Pakistani";
// var indexOfString = stringGiven.indexOf("n");
// document.write("String : " + stringGiven + "<br> Index of 'n' : " + indexOfString);
    

// // Question 4
 
// var LastIndexString = "Hello World";
// var lastIndex = LastIndexString.lastIndexOf('l');
// document.write("String : " + LastIndexString + "<br> Last Index of 'l' : " + lastIndex);
   
// // Question 5

// var thirdIndex = 'Pakistani';
// var findThirdIndex = thirdIndex.charAt(3);
// document.write("String : " + thirdIndex + "<br> Character at index 3 : " + findThirdIndex);
   
// // Question 6
// var fname = prompt("Enter your first Name : ");
// var lname = prompt("Enter your last Name : ");
// var fullName = fname.concat(lname);
// document.write("Welcome " + fullName);

// // Question 7
// var currentCity = "Hyderabad";
// var ReplacedCity = currentCity.replace("Hyderabad", "Islamabad")
// document.write("City : " + currentCity + "<br>" + "After replacement: " + ReplacedCity);

// // Question 8 
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replaceWords = message.replace(/and/g, "&");
// document.write("Current Message  : " + message + "<br>" + "After replacement: " + replaceWords);

// // Question 9 

// var stringNumber = "472";
// var numberToString = +stringNumber;
// document.write("Value : " + stringNumber + "<br>" + "Type :  " + typeof (stringNumber) + "<br>");
//     document.write("Value : " + numberToString + "<br>" + "Type :  " + typeof (numberToString));
    
// // Question 10 
// var UserIpnut = prompt("Enter a Letter or Word")
//  var UpperLetterWord = UserIpnut.toLocaleUpperCase();
// document.write("User Input : " + UserIpnut + "<br>" + "Upper Case  :  " + UpperLetterWord);

// // Question 11 

//  var userInput = prompt("Enter a word or Letter");
//  document.write("User Input : " + userInput + "<br>")
//  document.write("Title case : ")
//  var userInput = userInput.split(' ');
//     for (i = 0; i < userInput.length; i++) {
//         userInput[i] = userInput[i].charAt(0).toUpperCase() + userInput[i].slice(1) + " ";
//         document.write(userInput[i])
//     } 
// // Question 12

//     var num = 35.36;
//     document.write("Number : " + num + "<br>")
//     var strings = '' + num;
//     var removedDot = strings.replace(".", "")
//     document.write("Result : " + removedDot)

// // Question 13
// // ASCII code of ! is 33
// // ASCII code of , is 44
// // ASCII code of . is 46
// // ASCII code of @ is 64

// var userPass = prompt("Enter a name : ")
//     var flag = false
//     var splitPass = userPass.split('');
//  for (i = 0; i < splitPass.length; i++) {
//   if ((splitPass[i] === "!") || (splitPass[i] === ",") || (splitPass[i] === ".") || (splitPass[i] === "@")) {
//  flag = true;
//             alert("Please enter a valid username");}}
//     if (flag === false) {
//  alert("Valid password")}
 
// // Question 14

//     var A = ["cake", "apple pie", "cookie", "chips", "patties"];
//     var snakcsInput = prompt("Enter a snacks").toLowerCase();
// if (A.indexOf(snakcsInput) !== -1) {
//         document.write(snakcsInput + " is available at index " + A.indexOf(snakcsInput)) }
//         else {
//         document.write("We are sorry.  " + snakcsInput + " is not available in our bakery") }

//         // Question 15

//     var pass = prompt("Enter your password");
//     var a = [ "A","B",  "C",  "D", "E",   "F",   "G",  "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
//     var b = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
//     ];
//     var c = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// var isNumber = false;
// var isAlpha = false;
//  var isInvalid = false;
// if (c.indexOf(pass[0]) !== -1) {
//         alert("Number is not allowed on index 0")
//     }
//     else if (pass.length < 6) {
//         alert("Password should be at leasat 6")
//     }
//   else {
//   for (i = 0; i < pass.length; i++) {
//     if (a.indexOf(pass[i]) !== -1) {
//   isAlpha = true; }
//             else if (b.indexOf(pass[i]) !== -1) {
// isAlpha = true; } else if (c.indexOf(pass[i]) !== -1) {
//  isNumber = true;}else { isInvalid = true;}
//     }
// if (isNumber && isAlpha && !isInvalid) {
//    alert("Correct !")
//         }
//         else {
//       alert("password not meet the requirement ")
//         }  }

// // Question 16

// var university = "University of Karachi";
// var splitiedvalues = university.split('').join("<br>")
//     document.write(splitiedvalues);

// // Question 17

// var character = "Pakistan";
// var LastChar = (character.length) - 1;
// document.write(character[LastChar])
    

// // Question 18

// var n = "The quick brown fox jumps over the lazy dog.";
// var lowest = n.toLowerCase()
//     var splitedvalue = lowest.split(" ");
//     var coutString = 'the';
// var count = 0;
//     for (var i = 0; i < splitedvalue.length; i++) {
//         if (coutString == (splitedvalue[i]))
//             count++;
//     }document.write("Text : " + n + "<br>")
//     document.write("There are " + count + "occurrence(s) of the word 'the' ");