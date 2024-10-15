const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 10, 11],
];

// tư duy để hiểu bài như sau: ta sẽ dùng thuật toán ma trận xoay để xoay cái ma trận này bằng cách đổi vị trí của mỗi cột thành hàng
// đầu tiên duyệt từng dòng sau đó duyệt từng cột

const rotateMatrix = (matrix) => {
    return matrix[0].map((_, colIndex) => (matrix.map(row => row[colIndex]).reverse()))
}

const result = rotateMatrix(matrix);
result.forEach((row)=>{
    console.log(row.join(' '));
})






