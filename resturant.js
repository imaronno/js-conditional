const age = 62;
const price = 500;
if(age <=12) {
    console.log('You can eat for free')
}
else if (age >= 60) {
    // 50% Discount
    const discount  = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else if (age >= 50){
    // 25% discount
    const discount2  = price * 25 / 100;
    const payAmount2 = price - discount2;
    console.log(payAmount2)
}
else if (age >= 40){
    // 10% Discount
    const discount3  = price * 10 / 100;
    const payAmount3 = price - discount3;
    console.log(payAmount3)
}
else{
    console.log(price)  
}