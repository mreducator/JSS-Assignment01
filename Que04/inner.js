let numberOfChilds = 2;
let numberOfAdults = 1;
let numberOfSeniors = 1;

let ticketPriceForChild = 100;
let ticketPriceForAdults = 150;
let ticketPriceForSeniors = 120;


let totalPriceForChild = numberOfChilds*ticketPriceForChild;
let totalPriceForAdults = numberOfAdults*ticketPriceForAdults;
let totalPriceForSeniors = numberOfSeniors*ticketPriceForSeniors;
let totalPrice = (numberOfChilds*ticketPriceForChild)+ (numberOfAdults*ticketPriceForAdults)+(numberOfSeniors*ticketPriceForSeniors)
console.log(`price for child is ${totalPriceForChild}`)
console.log(`price for Adults is ${totalPriceForAdults}`)
console.log(`price for Seniors is ${totalPriceForSeniors}`)
console.log(`total price is ${totalPrice}`)