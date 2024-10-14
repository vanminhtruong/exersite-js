class ResultDisplayer {
    constructor(resultElement) {
        this.resultElement = resultElement;
    }

    displayMessage(message, isValid) {
        this.resultElement.textContent = message;
        this.resultElement.style.color = isValid ? 'green' : 'red';
    }
}

export default ResultDisplayer;