 const passedText = '17';
 const failedText = '3';

//1. Print passedText + failedText 
// and explain in a comment why the result is 173. 
console.log(passedText + failedText );
//The result is 173 becuse we join two variables 

//2. Convert both with Number() and print the total (20). 
const passedNumber = Number(passedText);
const failedNumber = Number(failedText);

console.log(passedNumber + failedNumber );

//3. Print typeof of the text and of the converted value. 
const passedTexttype = typeof(passedText);
const failedTexttype = typeof(failedText);
const passedNumbertype = typeof(passedNumber);
const failedNumbertype = typeof(failedNumber);

console.log(`The type of the Passed Text is ${passedTexttype} and the type of the Failed Text is ${failedTexttype}.`);
console.log(`The type of the Passed Number is ${passedNumbertype} and the type of the Failed Number is ${failedNumbertype}.`);



