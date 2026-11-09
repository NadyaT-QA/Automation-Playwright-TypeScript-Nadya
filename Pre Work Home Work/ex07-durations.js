const durations = [1200, 800, 4300, 950, 2700]; 

//1. Print the first item, the last item (use length) and the number of items. 
console.log(durations[0]);
console.log(durations[durations.length - 1]);
console.log(durations.length);

//2. Add 3100 with push. 
durations.push(3100);
console.log(durations);

//3. With a for...of loop calculate the total, the average and the slowest duration. 
let total = 0;
let slowest = 0;
for (const ms of durations) {
    total += ms;
    if (ms > slowest) {
        slowest = ms;
    }
}

const average = total / durations.length;

console.log(`Total: ${total}ms`);
console.log(`Avarage: ${average}ms`);
console.log(`Slowest: ${slowest}ms`);