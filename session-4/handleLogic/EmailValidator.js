import Validator from './Validator.js';
class EmailValidator extends Validator {
    isValid(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

export default EmailValidator;