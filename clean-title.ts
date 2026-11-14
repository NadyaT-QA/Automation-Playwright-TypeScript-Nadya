//start from '   broken STREET light   ' and print it trimmed,
//  in lower case, in upper case, 
// capitalized (Broken street light), 
// whether it mentions "light", 
// and with "street" replaced by "road"

const titleText = "   broken STREET light   ";
console.log(titleText);

const trimTitle = titleText.trim();
console.log(trimTitle);

const lowerCaseTitle = trimTitle.toLowerCase();
console.log(lowerCaseTitle);

const upperCaseTitle = lowerCaseTitle.toUpperCase();
console.log(upperCaseTitle);

const capitalizedTitle = lowerCaseTitle.charAt(0).toUpperCase() + lowerCaseTitle.slice(1);
console.log(capitalizedTitle);

const includesLight = capitalizedTitle.includes("light");
console.log(includesLight);

const replacedTitle = capitalizedTitle.replace("street", "road");
console.log(replacedTitle);