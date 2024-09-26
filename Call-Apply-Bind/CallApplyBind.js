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

