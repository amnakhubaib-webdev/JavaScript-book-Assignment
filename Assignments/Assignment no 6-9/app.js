// Assignment 6-9 MATH EXPRESSIONS
// Question no 1
// Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

// var a = 10;
// document.write("Result: <br>");
// document.write("The value of a is: " + a + "<br>");
// document.write("................................................<br><br>");
// ++a;
// document.write("The value of ++a is: " + a + "<br>");
// document.write("Now, the value of a is: " + a +"<br><br>");
// document.write("The value of a++ is: " + a +"<br>")
// a++;
// document.write("Now, the value of a is: " + a +"<br><br>");
// --a;
// document.write("The value of --a is: " + a +"<br>");
// document.write("Now, the value of a is: " + a +"<br><br>");
// document.write("The value of a-- is: " + a +"<br>");
// a--;
// document.write("Now, the value of a is: " + a +"<br><br>");


// Question no 2
// What will be the output in variables a, b & result after execution of the following script:var a = 2, b = 1;var result = --a - --b + ++b + b--;Explain the output at each stage:--a;--a - --b;--a - --b + ++b;--a - --b + ++b + b--;


// var a = 2 , b = 1;
// var result = --a - --b + ++b + b--;
// document.write("<h1>Explaination</h1><br>");
// document.write("--a is the pre decrement of a, Now value of a is 2 after decrement --a =  1  <br>");
// document.write("--b is the pre decrement of b, Now value of b is 0 after decrement --b =  0  <br>");
// document.write("++b is the pre increment of b, Now value of b is 1 after increment ++b =  1  <br>");
// document.write("++b is the decrement of b, it will decrease the value after call the varibale Now value of b is 1 after decrement  b-- =  1<br>");
// document.write("Current value of a is : 1<br>");
// document.write("Current value of b is : 1<br>");
// document.write("Result : " + result);

// Question no 3
// Write a program that takes input a name from user & greet the user.


// var program = prompt("Enter your name : ");
// alert("Welcome " + program);

// Question no 4
// Write a program to take input a number from user &display it’s multiplication table on your browser.

// var table = prompt ("Please Enter a number: ");
// document.write(table + " "+" x 1 = " + table *1 +"<br>" + table + " x 2 = " + table * 2 + "<br>" + table + " x 3 = " + table * 3 + "<br>" + table + " x  4 = " + table * 4 + "<br>" + table + " x 5 = " + table * 5 + "<br /> " + table + " x 6 = " + table * 6 + "<br /> " + table + " x 7 = " + table * 7 + "<br /> " + table + " x 8 = " + table * 8 + "<br /> " + table + " x 9 = " + table * 9 + "<br /> " + table + " x 10 = " + table * 10 + "<br />(" );


// Question no 5
// Take three subjects name from user and store them in 3 different variables.b) Total marks for each subject is 100, store it in another variable.c) Take obtained marks for first subject from user and stored it in different variable.d) Take obtained marks for remaining 2 subjects from user and store them in variables.e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)


// var sub1 = prompt("Please enter your subject name");
// var sub1marks = parseInt(prompt("Please enter your obtained Marks of this subject"));
// var sub2 = prompt("Please enter your subject name");
// var sub2marks = parseInt(prompt("Please enter your obtained Marks of this subject"));
// var sub3 = prompt("Please enter your subject name");
// var sub3marks = parseInt(prompt("Please enter your obtained Marks of this subject"));
// var eachSubjMarks = 100;
// var percentage1 = sub1marks / eachSubjMarks * 100;
// var percentage2 = sub2marks / eachSubjMarks * 100;
// var percentage3 = sub3marks / eachSubjMarks * 100;
// var totalMarks = 300;
// var obtMarks = sub1marks + sub2marks + sub3marks;
// var finalpercent = obtMarks / totalMarks * 100; 
// document.write(`<table>
//     <tr>
//         <th>Subject</th>
//         <th>Total Marks</th>
//         <th>Obtained Marks</th>
//         <th>Percentage</th>
//     </tr>
//     <tr>
//     <td>${sub1}</td>
//     <td>${eachSubjMarks}</td>
//     <td>${sub1marks}</td>
//     <td>${percentage1}%</td>
//     </tr>
//     <tr>
//     <td>${sub2}</td>
//     <td>${eachSubjMarks}</td>
//     <td>${sub2marks}</td>
//     <td>${percentage2}%</td>
//     </tr>
//     <tr>
//     <td>${sub3}</td>
//     <td>${eachSubjMarks}</td>
//     <td>${sub3marks}</td>
//     <td>${percentage3}%</td>
//     </tr>
//     <tr><b>
//     <td></td>
//     <td>${totalMarks}</td>
//     <td>${obtMarks}</td>
//     <td>${finalpercent}%</td>
//     </b></tr>
// </table>`)