let Man = {
    name: 'Leon S Kenedy',
    age: '25',
    game: 'Resident evil 4 remake',
    height: '1.85m',
    mission: 'Save Ashley Graham',
    date: '20/03/2023',
}


function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj; // Trả về giá trị gốc
    const clone = Array.isArray(obj) ? [] : {}; // Tạo mảng hoặc đối tượng mới
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]); // Đệ quy sao chép thuộc tính
        }
    }
    return clone; // Trả về đối tượng sao chép
}

let man = deepClone(Man);
console.log(Man);
console.log(man);