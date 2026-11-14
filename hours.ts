// convert 30 SLA hours into full days 
// and remaining hours (use Math.floor and %) 
// and into minutes. 
// Then start a let counter at 5 open requests, 
// add 3 new ones, resolve 2 and print the result

const slaHours = 30;
const fullDays = Math.floor(slaHours / 24);
const remainingHours = 30 % 24;
const totalMinutes = 30 * 60;

let openRequests = 5;
openRequests += 3;
openRequests -= 2;

console.log(`Full days: ${fullDays}`);
console.log(`Remaining hours: ${remainingHours}`);
console.log(`Total minutes: ${totalMinutes}`);
console.log(`Open requests: ${openRequests}`);