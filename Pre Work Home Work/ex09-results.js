const results = [ 
{ name: 'Login', status: 'passed', durationMs: 1800 }, 
{ name: 'Search', status: 'failed', durationMs: 4200 }, 
{ name: 'Profile', status: 'skipped', durationMs: 0 }, 
{ name: 'Checkout', status: 'passed', durationMs: 3500 }, 
{ name: 'Logout', status: 'passed', durationMs: 600 }, 
]; 
//Write summarise(results) that returns an object { passed, failed, skipped }, and 
//slowestTest(results) that returns the name of the slowest test. Print both.



function summarise(results)  {
  
    const summary  = {passed: 0, failed:0, skipped:0}  

    for (const s of results) {
    if (s.status === "passed") {
        summary.passed ++;   
    } 
    else if(s.status === "failed") {
        summary.failed ++;
    }
    else if(s.status === "skipped") {
        summary.skipped ++;
    }
}
    return summary;
};


function slowestTest(results) {

    let slowest = results[0];
for (const ms of results) {
    
    if (ms.durationMs > slowest.durationMs) {
        slowest = ms;
    }
}
    return slowest.name;
}

console.log(summarise(results));
console.log(`Slowest: ${ slowestTest(results)}`);