
class StringProcessor {
    constructor(str) {
        this.str = str;
    }

    // Xử lý chuỗi theo yêu cầu
    process() {
        this.str = this.removeSpecialChars(this.str);
        this.str = this.normalizeSpaces(this.str);
        return this.str;
    }

    // Loại bỏ ký tự đặc biệt
    removeSpecialChars(str) {
        return str.replace(/[@#!{}[\]()]/g, "");
    }

    // Chuẩn hóa khoảng trắng
    normalizeSpaces(str) {
        return str.replace(/\s+/g, ' ').trim();
    }
}

// Class WordProcessor chịu trách nhiệm xử lý mảng từ
class WordProcessor {
    constructor(str) {
        this.str = str;
    }

    // Tạo mảng từ đã xử lý
    getProcessedWords() {
        if (this.str === "") {
        return [];
        }
        return this.str.split(' ')
        .map(word => this.capitalizeFirstLetter(word))
        .reverse();
    }

    // Viết hoa chữ cái đầu tiên của từ
    capitalizeFirstLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
}

// Class NumberProcessor chịu trách nhiệm xử lý số
class NumberProcessor {
    constructor(str) {
        this.str = str;
    }

    // Tính trung bình cộng các số trong chuỗi
    getAverageNumber() {
        const numbers = this.str.match(/\b\d+\b/g);
        if (!numbers) {
        return 0;
        }
        const sum = numbers.reduce((acc, num) => acc + parseInt(num), 0);
        return parseFloat((sum / numbers.length).toFixed(1));
    }
}

// Xử lý sự kiện khi click nút "Xử lý"
document.getElementById('processButton').addEventListener('click', () => {
    const inputString = document.getElementById('inputString').value;

    // Khởi tạo các đối tượng xử lý
    const stringProcessor = new StringProcessor(inputString);
    const processedString = stringProcessor.process();

    const wordProcessor = new WordProcessor(processedString);
    const processedWords = wordProcessor.getProcessedWords();

    const numberProcessor = new NumberProcessor(processedString);
    const averageNumber = numberProcessor.getAverageNumber();

    // Hiển thị kết quả
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Chuỗi đã xử lý: ${processedString}</p>
        <p>Mảng từ: ${JSON.stringify(processedWords)}</p>
        <p>Trung bình cộng các số: ${averageNumber}</p>
    `;
});