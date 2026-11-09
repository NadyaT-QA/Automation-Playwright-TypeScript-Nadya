const total = 40;
const failed = 6;
const skipped = 2;

//calculate passed tests 
// and the pass rate in percent, rounded with Math.round. 
// Then print whether the run is green: 
// green means no failed tests and a pass rate of at least 90.

const passedTests = total - (failed + skipped);

const passedRate = Math.round((passedTests / total) * 100);

const isGreen = failed === 0 && passedRate >= 90;


console.log(`The passed tests are ${passedTests}.`);
console.log(`The precent of the passed tests is ${passedRate}%.`);

//Second option with if-else for the run
//if (failed === 0 && passedRate >= 90) {
//    
//    console.log("The run is green.");
//
//} else {
//    
//    console.log("The run is not green.");
//
//}
console.log(`Is The run green: ${isGreen}.`);