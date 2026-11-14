//build the label REQ-1042 [P2] 
// Broken street light (Lighting) from separate constants, 
// print it, then print its length with .length


const id = "REQ-1042";
const priority = "[P2]";
const title = "Broken street light";
const category = "(Lighting)";

const label = `${id} ${priority} ${title} ${category}`;
console.log(label);
console.log(label.length);