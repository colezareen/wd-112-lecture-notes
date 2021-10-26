// JavaScript
/*
    JavaScript was founded in 1996 by Brandon Eich
    -client side language (runs in the browser)
    -interpreted (not compiled)
    -object oriented
    -ECMAScript which is an organization that sets language standards
*/

// Comments
/*
    Lines or blocks of code that are not being interpreted by the parser.
    -Denoted by // for single line
    -Or like the existing comment that allows many lines of code.
    -Comments get read but are not executed
    -Beneficial in documenting maintainable codebase
    */

// Variables

/*
    Containers that store data in memory.
        -declaration
            -allowing the memory space to be reserved
            -start with let or var
            -cannot start with a number or most characters other than $ or _
            -default value is undefined (apart from const)
            -loosely typed language (no need to declare data type)
        -initialization
*/

let firstName; 
// console.log(firstName)

var lastName;
// console.log(lastName)

// const age;
// Missing Initializer Error. Const must always be declared and initialized.
// console.log(age)

// Coding Practices for Variables
/*
    - Be concise (ex: firstName instead of usersFirstName)
    - Be specific (ex: getValue instead of i)
    - Utilize camelCase, snake_case, PascalCase, or skewer-case.
    -You can also utilie nocase or SCREAMING_CASE
*/

// Variable Initialization
/*
    The data value that is given to a variable declaration.
    -Can be anything (string, integer, array, function, class, etc.)
    -Can be reassigned (apart from const)
*/

// declaration indentifier = initialier (value)
let address = "430 N Park";
// console.log(address)

// redeclare variables with different initializers
/* 
   (a) variable declaration  
   (b) variable identifier
   (c) value or initializer
*/

// console.log(address)

// redeclare variables with different initializers

address = "157 W Ohio St"
console.log(address)

console.log(firstName, lastName);

firstName = "Summer"; 
lastName = "Kerekes";

console.log(firstName, lastName)

const ssn = 123456789

console.log(ssn)

// snn = 556646443
// console.log(ssn)
// ERROR: TypeError: assignment to constant variaable
// ! Const varibables cannot be reassigned!

let text = "Hey \"text\" "
console.log(text)

// Data Types
/*
    JavaScript has several data types that can be used. They are:
        -Boolean
        -Null
        -Undefined
        -String
        -Number
        -Array
        -Object
*/

// String
/*
    Data type used to represent text in single or double quotes. 
    Primitive Data Type
*/

let myString = "This is a string data type";

myString = 'Can be in single quotes';

// Template literal
myString = 'This is a template literal string';

console.log(typeof myString) // typeof returns data type

// Numbers 

let degrees = 90;
console.log(degrees)

let precise = 999999999;
// 15 digits doesn't round up
console.log(precise)

let rounded = 9999999999999999;
// 16 digits rounds up
console.log(rounded);

let decimalAddition = 0.2 + 0.1;
console.log(decimalAddition)

let strToNum = "123";
console.log(strToNum)
let myNumber = Number(strToNum)
console.log(typeof strToNumber)

// BooLean
// Two possible values: true (on) or false (off)

let on = true;
console.log(on)

let off = false;
console.log(off)

//Undefined
// No value is assigned and does not act as empty container

let undef = undefined;
console.log(undef)

let correct;
console.log(undef)

// Null
// Null is an empty value. Container with nothing in it. 

let empty = null;
console.log(null)

// Null vs Undefined

/*
    -Null is like container with nothing in it
    -Undefined means variable has never been set or created
*/

// Data Type Literals
//When developer insert a value into a data type

let strLiteral = "This is a string literal"

// Arrays
// Container holding a list of items

let students =  ("Dean", "Cole", "Kiersten");

console.log(typeof students) // returns object

// Object
// Stores many values

let student = {
    name: "Cole",
    age: 20,
    graduated: false,
}

console.log(typeof student)

// Operators

// Assigment Operator
// Assigns a value to the declaration (not "equal", but "is")

let r= 5;

// Comparison Operators
/*
    Compare values on either side of the operator
        -returns either a true or false
*/

// Equal to operator 
console.log(3 = 3) // returns true

// Not equal to 
console.log(3 != 5) // return true because 3 is not equal to 5

// Type Coorion
/*
    Process of converting one data type into another 
    Done automatically by the JS parser.
*/

console.log(3 == "3")  // returns true because JS changes str data type to int data type before comparison operation.

// Strict Equal or Not Equal Operators
// Tests for not only value but it's data type. 

console.log(3 === 3) // returns true because value & data type is same 

console.log(3 === "3") //returns false because data types are different (int aand str)

console.log(3 !== "3")   //returns true because data types of 3 string do not equal 3
! = =
// Greater; Less; Greater & Equal; Less & Equal

console.log(5 > 3) // returns true

console.log(5 >= 5) // returns ture

console.log(1 < 0) // returns false

console.log(1 < "1") //returns false

console.log(0 < "1") //returns true because type coorcion exist in these operators as well

// Logical Operators Not AND OR

/*
    AND Operator (&&)
        -true if both values result to true
    OR Operator (||)
        -true if one or the other; value results in true Not Operator (!)
        -if both false it will come back false
    NOT Operator (!)
        -flips the resulting logical operation
*/

let x = 5;
let y = 7;

console.log()

// Add, Substract, Multiply, Divide

console.log(5 + 5);
console.log(5 - 5);
console.log(5 * 5);
console.log(2 / 5);

let addNums = 5;

addNums = addNums * 2
console.log(addNums)

addNums *= 2 //shorthand operator (wors for all + - / * ect)
console.log(addNums)

//Modulus Operator

console.log(12 % 5)

// String Concatenation

let fName = "Kiersten";
let lName = "Gamby";

console.log(fName, lName)

let name = "Ms. " + fName + "" + lName
console.log(name)

// Template literal

let templateLiteralName = `Ms. ${fName} ${lName}` is ${20 + 1} years old.
console.log(templateLiteralName)

//Multi Line Strings

let multiline = "Once upon a time there was a guy who taught JS to student and lied about his age. He has a bulldog named Bentley."

console.log(multiline)

// Challenge

/*
    Set 7 to 8 variables:
    fName; lName; houseNumber; aptNumber (if applicable); street; city; state; post code; and concatente them together to create your address stamp.

    