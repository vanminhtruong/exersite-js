// sử dụng kiến thức closure đã học để giải bài tập này

function createCounter(n) {
    let count = n; 

    return function(array) {
        const result = []; 
        for (let i = 0; i < array.length; i++) { 
            result.push(count++); 
        }
        return result;
    };
}


const counterFrom10 = createCounter(10);
const result1 = counterFrom10(["arr", "arr", "arr", "arr", "arr"]);
console.log(result1); 

const counterFromMinus2 = createCounter(-2);
const result2 = counterFromMinus2(["arr", "arr", "arr", "arr", "arr"]);
console.log(result2); 
