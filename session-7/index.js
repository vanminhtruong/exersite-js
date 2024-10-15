const nestedArray = [1, [2, [3, [4,5,6,7,8,9]]]];

// mục tiêu là cho ra kết quả: [1,2,3,4,5,6,7,8,9];
const newArray = nestedArray.flat();
console.log("is: " + newArray);
