function calculateTotalEarnings(comm,bonus){
    const commission=this.salesTotal*(comm/100);
    const TotalEarn=this.salesTotal+commission+bonus;
    return TotalEarn;
}


const salesPerson1={
    name:"shivankit agarwal",
    salesTotal: 8000,
}
const salesPerson2={
    name:"Ravi Kumar",
    salesTotal: 5000,
}
// 1. Using `call` to calculate Shivankit's total earnings
const totalearnShiv=calculateTotalEarnings.call(salesPerson1,3000,1500);
console.log(`${salesPerson1.name} has earn total of ${totalearnShiv}`);


// 2. Using `apply` to calculate Ravi's total earnings
const totalearnRavi=calculateTotalEarnings.apply(salesPerson2,[2000,800]);
console.log(`${salesPerson2.name} has earn total of ${totalearnRavi}`);


// 3. Using `bind` to create a bound function for Shivankit's future earnings calculation
const calculateShivEarning = calculateTotalEarnings.bind(salesPerson1);
const totalEarningsShivNextMonth = calculateShivEarning(3300,1800);
console.log(`${salesPerson1.name}'s Earnings Next Month: $${totalEarningsShivNextMonth}`); // Output: John's Earnings Next Month: $5550



// How do you round the number 7.233, to the nearest integer? --> Math.round(7.233);
// How do you find the number with the highest value of x and y? --> Math.max(x,y);
// How can you detect the client's browser name? --> navigator.appName 
// Which doctype is correct for HTML5? --> <!DOCTYPE html>  
// In HTML, you can embed SVG elements directly into an HTML page. --> True  
// The HTML <canvas> element is used to: --> draw graphics  
// Which HTML element is used to display a scalar measurement within a range? --> <meter>  

