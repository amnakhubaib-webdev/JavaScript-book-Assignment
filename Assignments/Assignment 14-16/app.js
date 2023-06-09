// Assignment 13-15 ARRAY
// Question NO 1
// Declare an empty array using JS literal notation to store student names in future.

// var names = [];
//     alert("var names = [ ] ;")

// Question no 2
// Declare an empty array using JS object notation to store student names in future

// arrayList = new Array()
// alert(" arrayList = new Array()")

//Question no 3
// Declare and initialize a strings array.

// var stringArray = ["Karachi", "Lahore", "Islambad"];

// Question no 4
//Declare and initialize a numbers array.

// var numberArray = [1, 2, 4, 5, 6, 66, 67];

// Question no 5
// Declare and initialize a boolean array.

// var booleanArray = [true, false, true, false, true, false, true];

// Question no 6
// Declare and initialize a mixed array.

// var mixArray = ["Karachi", "Lahore", "Islambad", 1, 2, 4, 5, 6, 66, 67, true, true, false, false];

// Question no 7
// Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).

// var qualificationsInPak = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"]

//     document.write("<h1>Qualification</h1><br>")
//     document.write(`<h2>1) ${qualificationsInPak[0]}</h2>`)
//     document.write(`<h2>2) ${qualificationsInPak[1]}</h2>`)
//     document.write(`<h2>3) ${qualificationsInPak[2]}</h2>`)
//     document.write(`<h2>4) ${qualificationsInPak[3]}</h2>`)
//     document.write(`<h2>5) ${qualificationsInPak[4]}</h2>`)
//     document.write(`<h2>6) ${qualificationsInPak[5]}</h2>`)
//     document.write(`<h2>7) ${qualificationsInPak[6]}</h2>`)
//     document.write(`<h2>8) ${qualificationsInPak[7]}</h2>`)

// Question no 8
// Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:


// var stdNames = ["Amna", "fatima", "zoya"];
// var stdScroes = [450, 340, 380];
// var perofStd1 = stdScroes[0] / 500 * 100;
// var perofStd2 = stdScroes[1] / 500 * 100;
// var perofStd3 = stdScroes[2] / 500 * 100;
// document.write(`Score of  ${stdNames[0]} is ${stdScroes[0]}. Percentage ${perofStd1}% <br> `)
// document.write(`Score of  ${stdNames[1]} is ${stdScroes[1]}. Percentage ${perofStd2}% <br> `)
// document.write(`Score of  ${stdNames[2]} is ${stdScroes[2]}. Percentage ${perofStd3}% <br> `)

// Question no 9
// Initialize an array with color names.

// var colors = ["red", "green", "blue"];
//     document.write(colors);

// Question no 9a
// Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.Display the updated array in your browser.

// var colorInput = prompt("Enter a color name which do you want to add at the start.");
//     var colors = ["red", "green", "blue"];
//     var Addedcolor = colors.unshift(colorInput);
//     document.write(colors);

// Question no 9b
// Ask the user what color he/she wants to add to the end  & add that color to the end of the array. Display the  updated array in your browser.

// var colorInput = prompt("Enter a color name which do you want to add at the end.");
// var colors = ["red", "green", "blue"];
// var Addedcolor = colors.push(colorInput);
// document.write(colors);

// Question no 9c
// Add two more color to the beginning of the array. Display the updated array in your browser

// var colorInput1 = prompt("Enter a color 1 name which do you want to add at the start.");
//     var colorInput2 = prompt("Enter a color 2 name which do you want to add at the start.");
//     var colors = ["red", "green", "blue"];
//     var Addedcolor = colors.unshift(colorInput1, colorInput2);
//     document.write(colors);

// Question no 9d
// Delete the first color in the array. Display the updated array in your browser

// var colorInput = prompt("Enter a color  name which do you want to delete  at the start.");

//     var colors = ["red", "green", "blue"];
//     var Addedcolor = colors.shift(colorInput);
//     document.write(colors);

// Question no 9e
// Delete the last color in the array. Display the updated array in your browser

// var colors = ["red", "green", "blue"];
//     var colorInput = prompt("Enter a color name which do you want to add at the desire position.");
//     var indexNumber = +prompt("which color do you want to add on that index? ");
//     colors.splice(indexNumber, 0, colorInput);
//     document.write(colors);

// Question 9f 
// Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser

// var colors = ["red", "green", "blue"];
//     var deleteIndex = +prompt("At which index do you want to delete color?")
//     var colorDelete = +prompt("which color do you want to delete on that index?")
//     colors.splice(deleteIndex, colorDelete);
//     document.write(colors + "<br/>");

// Question 10
// Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

// var studentScores = [26, 92, 55, 17, 32, 22, 48];
// document.write("Scores of Students :  " + studentScores);
// document.write("<br>")
// var sortedScores = studentScores.sort()
// document.write("Ordered Scores of Students :  " + studentScores);

// Question 11
// Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array

// var citiesArray = ["karachi", "Lahore", "Quetta", "Multan", "Peshawar"]
//     var selectedCities = citiesArray.slice(2, 5);
//     document.write("Cities List  : <br> " + citiesArray + "<br>");
//     document.write("Cities List  : <br> " + selectedCities);

// Question 12
// Write a program to create a single string 

// var arr = ["This", "is", "my", "cat"];
// document.write("<h1>Array: </h1>");
// document.write(`<h1>${arr}</h1><br>`);
// var joined = arr.join(" ");
// document.write("<h1>String: </h1>");
// document.write(`<h1>${joined}</h1><br>`);

// Question 13
// Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out

// var acc = ["Keyboard", "mouse", "printer", "monitor"];
// document.write("<h2>Devices: </h2>");
// document.write(`<h2>${acc}</h2><br>`);

// var firstDevice = acc.shift();
// document.write(`<h2>Out: <br>  ${firstDevice}</h2>`);

// var secDevice = acc.shift();
// document.write(`<h2>Out: <br>  ${secDevice}</h2>`);

// var thirdDevice = acc.shift();
// document.write(`<h2>Out: <br>  ${thirdDevice}</h2>`);

// var fourthDevice = acc.shift();
// document.write(`<h2>Out: <br>  ${fourthDevice}</h2>`);

// Question 14
// Create a new array. Store values one by one in such a waythat you can access the values in reverse order. (Last In-First Out)

// var acc = ["Keyboard", "mouse", "printer", "monitor"];
//     document.write("<h2>Devices: </h2>");
//     document.write(`<h2>${acc}</h2><br>`);
//     var firstDevice = acc.pop();
//     document.write(`<h2>Out: <br>  ${firstDevice}</h2>`);
//     var secDevice = acc.pop();
//     document.write(`<h2>Out: <br>  ${secDevice}</h2>`);
//     var thirdDevice = acc.pop();
//     document.write(`<h2>Out: <br>  ${thirdDevice}</h2>`);
//     var fourthDevice = acc.pop();
//     document.write(`<h2>Out: <br>  ${fourthDevice}</h2>`);

// Question 15
// Write a program to store phone manufacturers (Apple,   Samsung, Motorola, Nokia, Sony & Haier) in an array.  Display the following dropdown/select menu in your  browser using document.write() method:
   
// var mobiles = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write(`
//     <select>
//         <option>${mobiles[0]}</option>
//         <option>${mobiles[1]}</option>
//         <option>${mobiles[2]}</option>
//         <option>${mobiles[3]}</option>
//         <option>${mobiles[4]}</option>
//         <option>${mobiles[5]}</option>
//     </select>`)
