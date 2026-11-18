//Write a request status validator: 
// given the current and the next status, 
// print whether the transition is allowed 
// (Submitted → In Review → Resolved; 
// In Review → Waiting for Info → In Review)

let mainStatus: string = "Submitted";
let nextStatus: string = "In Review";

if (mainStatus === "Submitted" && nextStatus === "In Review") {
  console.log("Transition is allowed.");
}
else if (mainStatus === "In Review" && nextStatus === "Waiting for Info") {
  console.log("Transition is allowed.");
}
else if (mainStatus === "Waiting for Info" && nextStatus === "In Review") {
  console.log("Transition is allowed.");
} 

else if (mainStatus === "In Review" && nextStatus === "Resolved") {
  console.log("Transition is allowed.");
}

else {
  console.log("Transition is not allowed.");
}