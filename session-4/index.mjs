import FormHandler from './handleLogic/FormHandler.js';
import EmailValidator from './handleLogic/EmailValidator.js';
import ResultDisplayer from './handleLogic/ResultDisplayer.js'
class EmailValidationApp {
    constructor() {
        const emailValidator = new EmailValidator();
        const resultElement = document.getElementById('result');
        const resultDisplayer = new ResultDisplayer(resultElement);
        const inputElement = document.getElementById('emailInput');
        const formHandler = new FormHandler(emailValidator, resultDisplayer, inputElement);

        this.setupEventListeners(formHandler);
    }

    setupEventListeners(formHandler) {
        const validateButton = document.getElementById('validateButton');
        validateButton.addEventListener('click', () => formHandler.validateInput());
    }
}

console.log("is: "+new EmailValidationApp());

// Initialize the application (Single Responsibility for setup)
document.addEventListener('DOMContentLoaded', () => {
    new EmailValidationApp();
});
