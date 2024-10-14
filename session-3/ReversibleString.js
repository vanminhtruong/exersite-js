class ReversibleString {
    constructor(rawString){
        this.rawString = rawString;
    }

    reverse(){
        return this.rawString.split('').reverse().join('');
    }
}

export default ReversibleString;