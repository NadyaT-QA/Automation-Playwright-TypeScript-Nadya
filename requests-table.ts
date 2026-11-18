//Print a text table of requests: id, 
// title padded to 25 characters, priority, status


const testRequest: { title: string; priority: number }[] = [];

// Title and priority
for (let i = 1; i <= 10; i++) {
  const title = `Test request ${i.toString().padStart(2, '0')}`;
  const priority = (i % 5) + 1;
  testRequest.push({ title, priority });
}

// Status
const possibleStatuses = ["Submitted", "In Review", "Waiting for Info", "Resolved"];

// Table header
console.log("ID | Title                     | Priority | Status");
console.log("-".repeat(60));

// Print each request
for (let i = 0; i < testRequest.length; i++) {
  let req = testRequest[i];
  let id = (i + 1).toString().padStart(2, '0'); // ID- "01", "02"...
  let paddedTitle = req.title.padEnd(25);      // Title 25 char wide
  
  // Determine the status based on the index
  let status = possibleStatuses[i % possibleStatuses.length];

  // Print the formatted row
  console.log(`${id} | ${paddedTitle} | ${req.priority}        | ${status}`);
}
