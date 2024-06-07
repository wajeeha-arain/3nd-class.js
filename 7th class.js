
// let name = [];
// for (let i = 1 ; i < 100 ; i++){
//     name.push("wajeeha")
// }
// console.log(name);


//for in loop........
// use for mention array index.......................... 
// let name = ["zaree" ,"maree", "areeb", "sawii"]
// for(let elem in name){
//     console.log(elem);
// }

//for of loop ......
//.. use for mention array index value show ....................
// let name2 = ["zaree" ,"maree", "areeb", "sawii"]
// for(let elem of name2){
//     console.log(elem);
// }

//for each loop.......
// let arr = ["zaree" ,"maree", "areeb", "sawii"]
// //  those  function which is use as a parameter that is called  call back function...
// arr.forEach(function (val, ind) {
//     console.log(ind, val);
// })

//array filter......................
//this array is used for slceted value out from the array.
// let filterarr = [1,2,3,4,5,6,7,8,9,10]
// let arr = filterarr.filter(function(val){
//     if(val& 2 != 0) {
//         return true;
//     }else{
//         return false;
//     }
// })
// console.log(filterarr);
// console.log(arr);

// let filterarr = [1, 2, 3 , 4, 5, 6, 7, 8, 9 , 10,];
// let arr = filterarr.filter(function (val) {
//     if(val% 2 != 0){
//         return true 
//     }else{
//         return false
//     }
// })
// console.log(arr);
// console.log(filterarr);

// let userNUM = prompt("even number");
// let compNum = Math.round(Math.random() * 10)
// if( compNum % 2 === 0 && userNUM === "even"){
//     console.log("you win ! " + compNum);
// }else if(compNum % 2 !== 0 && userNUM === "odd"){
//     console.log("you win ! " + compNum);
// }else{
//     console.log(" you loss ! " + compNum);
// }

//sort...
// use for double value ..... in array ..
//sort line by line value number like as a to z
// let arr = [0,7 , 78,0,0,1,2,3,0,4,7,88,7,77,99,3,1,];
// let arrsort = arr.sort(function (a,b) {
//     if(a > b ){
//         return 1
//     }else{
//         return -1
//     }
// })
// // console.log(arr);
// console.log(arrsort);

//array value add
 //pervious value 2nd value is current 
// let arr = [0,7 , 78,0,0,1,2,3,0,4,7,88,7,77,99,3,1,];
// let a = arr.reduce( function (preval , currval) {
//     return preval + currval ;
// })
    
// console.log(a);

// let arr = ["ali", "  " ,"ahmed", " ","bux"];
// let a = arr.reduce( function (preval , currval) {
//     return preval + currval ;
// })
    
// console.log(a );
