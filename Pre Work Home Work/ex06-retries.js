//1. With a for loop print Run 1 of 5 … Run 5 of 5. 

for (let index = 1; index <= 5; index++) {
    console.log(`Run ${index} of 5`);
    
}

//2. With a while loop simulate retries: 
// the test passes on attempt 4. 
// Print each attempt and stop with break when it passes. 
// Never do more than 5 attempts. 

let attempt = 1;

while (attempt <= 5) {
    const pass = attempt === 4;
    
    console.log(`This is attempt ${attempt}.`);

    if (pass) {
        break;
    }

    attempt ++;
    
}