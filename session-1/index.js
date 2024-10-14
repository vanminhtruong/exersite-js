class NumberChecker {
    constructor(number) {
        this.number = number;
    }

    isPrime() {
        if (this.number <= 1) return false;
        for (let i = 2; i <= Math.sqrt(this.number); i++) {
            if (this.number % i === 0) return false;
        }
        return true;
    }

    isPerfect() {
        let sum = 0;
        for (let i = 1; i < this.number; i++) {
            if (this.number % i === 0) {
                sum += i;
            }
        }
        return sum === this.number;
    }
}

document.getElementById('checkButton').addEventListener('click', () => {
    const numberInput = document.getElementById('numberInput').value;
    const number = parseInt(numberInput, 10);
    const numberChecker = new NumberChecker(number);

    let resultText = `${number} là số `;
    resultText += numberChecker.isPrime() ? 'nguyên tố. ' : 'không phải số nguyên tố. ';
    resultText += numberChecker.isPerfect() ? 'Đó là số hoàn hảo.' : 'Đó không phải số hoàn hảo.';

    document.getElementById('result').innerText = resultText;
});
