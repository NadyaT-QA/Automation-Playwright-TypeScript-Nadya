//Write and call: 

//● isPassed(status): returns true only for 'passed'. 
function isPassed(status) {
    return status === "passed";
}

console.log(isPassed("passed"));
console.log(isPassed("failed"));

//● classifyDuration(ms): returns 'fast', 'ok' or 'slow' (rules from exercise 5). 
//fast = below 1000, 
//ok = from 1000 up to and including 3000, 
//slow = above 3000. 
// Test it with 800, 1000, 3000 and 3001.
function classifyDuration(ms) {
if (ms < 1000) {
    return "fast";}
else if(ms >= 1000 && ms <= 3000) {
    return "ok";} 
else {
    return "slowest";}
}
console.log(classifyDuration(800));
console.log(classifyDuration(1000));
console.log(classifyDuration(3000));
console.log(classifyDuration(3001));

//● formatResult(name, status = 'passed'): returns a string like Login: PASSED. 
function formatResult(name, status = "passed") {
    return `${name}: ${status.toUpperCase()}`;
}
 console.log(formatResult("Login", "passed"));
 console.log(formatResult("Login", "failed"));

//● Rewrite isPassed as an arrow function. 
const isPass = (status) => status === "passed";

console.log(isPass("passed"));
console.log(isPass("failed"));