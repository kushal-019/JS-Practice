// ******************** conversions ********************
let a = 3;
console.log(typeof a);
console.log(a);

a = "string";
console.log(typeof a);
console.log(a);

let c = Number(a);
console.log(typeof c);
console.log(c);

 c = Number(null);
console.log(typeof c);
console.log(c);

c = Number(undefined);
console.log(typeof c);
console.log(c);

c = Number("123");
console.log(typeof c);
console.log(c);

c = Number("string");
console.log(typeof c);
console.log(c);


// if variable is strictly declared with data type "Number", variable are converted to "number" data type but values do not behave same way , if possible like in case of null and boolean value , numerical values are assigned else NaN (not a number) is assigned as values to the variable.

// methods of conversions

// Number
// Boolean (1 = true , 0 = false , "any value " = true , "" empty string = false)
// String


// ******************** operations ********************

console.log(1+2+3); // 6
console.log("1"+"2"+"3"); // "123"
console.log("1"+2+3); // "123"
console.log(1+2+"3"); // "33"

// reason behind this is that it performs simple concatination/addition operation as per the data type detecated as soon as the data type change , it prefers string and behaves accordingly

// like 1+2+"3" it adds both 1&2 but when "3" detected , it concatinated 3+"3" as "33";

