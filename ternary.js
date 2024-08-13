/**
 * TERNARY --> Theree parts
 * 
*/

const age = 10;
// Normal If-else
// if(age >=18){
//     console.log('You Can Vote')
// } else(
//     console.log('Ghumai Thako')
// )
// Simple Ternary
// age >= 18 ? console.log('Vote Dio') :console.log('Ghumai Thako')
 
let price =500;
const isLeader =false ;

if(isLeader === true){
    price = 0;
}
else{
    price = price + 100
;}
console.log(price)

price = isLeader === true ? 0 : price +100;

// OPTIONAL:  semi-advanced ternary

if(isLeader === true){
    if(price > 1000 ){
        price= price /2;
    }
    else{
        price=0
    }
}
else{
    price = price + 1000;
}

// Feel Free to ignore this 
// price = isLeader === true ? price > 1000 ? price /2 : 0 : price + 1000;
price = isLeader === true ?
                 price > 1000 ? 
                       price /2 : 0
             : price + 1000;