// function( a piece of code which run own way)

// function greet () {
//     console.log("hello student");
    
// }
// greet()

// //function
// greet()
// greet()
// greet()

// function employee ( file) { // parameter
//     console.log(" work on this file "  + file  );
    
// }
// employee("ali") //argument function ""
// employee("ali 1")
// employee("ali 2")
// employee("ali 3")
// employee("ali 4")


//() round breket
//        //function create           

// function add (num1 , num2, num3) {
//     return num1 + num2 * num3;
// }
// let data = add(5 , 5,  5);
// let data2 = add(44, 44, 666);
// console.log(data, data2);


// function add (num1 , num2 ,num3) {
//     return num1 + num2 + num3;
    
// }
// let data = add(333, 33 , 44)
// let data2 = add( 44 , 66 , 77)
// console.log(data );

//x
// recursion work as loop .................................

// function writeData(data , time) {
//     // document.write(data)
//     // console.log(data);
// if( time > 1 ){
//     document.write(data , time - 1)
// }

// }

// writeData("hello" , 25)
//x

// closure === scope.............................................

// let abc = 123;// global
// function print () {
//     let abc = 123;// local
//     console.log(abc);

// }

// console.log(abc);
// print()


// let name2 = "ali";
// function print() {
//     let num2 = " wasif"
//     console.log(num2);

// }
// print()


// let name = "ali";
// function print() {
//     let num2 = " wasif"
//     console.log(num2);
//         // console.log( name + num2);
//              //anonymous function  or inner function
//       return function () {
//         console.log(num2);

        
//        }

//  }
//  let innerfunction = print()
//  innerfunction()

// function print() {
//     let num = "ali"
    
// }
// console.log(num);
// print()//we  get only code inside the function that is local function

// let num = "ali";
// function print() {

    
// }
// console.log(num);
// print() // we gat code inside or outside the function that is global scope

// function print() {
//     let num = "ahmed"
//     return function () {
//         console.log(num);
        
//     }
    
// }
// let innerfunction = print()
// innerfunction()
