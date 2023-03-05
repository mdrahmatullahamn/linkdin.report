// for(var i = 20; i <= 40; i++){
//     if(i%2===0 )
//     console.log(i)
// }


// var  count =0
// for(var i = 20; i<=40; i++){
//     if(i%2===0){
//         count++;
//     }
// }
// Q 6. print count of numbers form 147-254,which are dissible by 3 and odd

// for (var i =147; i <= 254; i++){
//     if (i%1==0){
//         console.log(i)
//     }
// }
// for (var i=1;  i<=100;i++){
//     console.log(i) 

// let str = '45';

// for (let i = 0; i < 9; i++) {
//   str = str + i;
// }

// console.log(str);

// Q .10 find given number is prsent iin given array or not ,if founnd  returen true else false


var array = [1,2,443,454,232,546,23,567,676,2342,565,4,2,6];
var number = 6;

// array.includes(23);
// console.log(array. includes);
// var falg = false;
//     for (var i = 0; i <array.length; i++) {
//         if (array[i]===number) {
//             falg = true;
//         }
//     }
//     if (falg === false) {
//         console.log("true")
//     }
//     else {
//         console.log("false")
//     }
// Q . Given an array make an object with key of that specific index with value ;
 var array = [9,8,7,6,5,4,3,2,1,0]
var result={}
for( var i=0; i<array.length;i++){
    result[i]= array[i].toString();
}
console.log(result)




