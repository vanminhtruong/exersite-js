class FormHandler {
    constructor(validator, resultDisplayer, inputElement) {
        this.validator = validator;
        this.resultDisplayer = resultDisplayer;
        this.inputElement = inputElement;
    }

    validateInput() {
        const email = this.inputElement.value.trim();
        const isValid = this.validator.isValid(email);
        const message = isValid ? 'Email is valid' || alert("Email is valid") : 'Email is invalid';
        this.resultDisplayer.displayMessage(message, isValid);
    }
}

export default FormHandler;