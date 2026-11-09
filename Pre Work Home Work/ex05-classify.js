//Given durationMs, 

let durationMs;

//print 
//fast = below 1000, 
//ok = from 1000 up to and including 3000, 
//slow = above 3000. 
// Test it with 800, 1000, 3000 and 3001. 

durationMs = 800;
if (durationMs < 1000) {
    console.log("The Duration is fast");
}
else if (durationMs >= 1000 && durationMs <= 3000) {
    console.log("The Duration is OK");
    
}
else {
    console.log("The Duration is slow");
}

durationMs = 1000;
if (durationMs < 1000) {
    console.log("The Duration is fast");
}
else if (durationMs >= 1000 && durationMs <= 3000) {
    console.log("The Duration is OK");
    
}
else {
    console.log("The Duration is slow");
}

durationMs = 3000;
if (durationMs < 1000) {
    console.log("The Duration is fast");
}
else if (durationMs >= 1000 && durationMs <= 3000) {
    console.log("The Duration is OK");
    
}
else {
    console.log("The Duration is slow");

}

durationMs = 3001;
if (durationMs < 1000) {
    console.log("The Duration is fast");
}
else if (durationMs >= 1000 && durationMs <= 3000) {
    console.log("The Duration is OK");
    
}
else {
    console.log("The Duration is slow");
}


// Then write a switch on a 
//status variable that prints PASS, FAIL or SKIP, 
// and UNKNOWN for anything else. 

let userStatus;
//userStatus = "pass";
//userStatus = "fail";
userStatus = "skip";
//userStatus = "PASS";

switch (userStatus) {
    case "pass": console.log(`The status is: PASS.`)
        
        break;
    case "fail": console.log(`The status is: FAIL.`)
        
        break;   
    case "skip": console.log(`The status is: SKIP.`)
        
        break;     

    default: console.log(`The status is: UNKOWN.`)
        break;
}