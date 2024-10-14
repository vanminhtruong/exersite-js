import ReversibleString from "./ReversibleString.js";

class DisplayReversedString extends ReversibleString{
    constructor(rawString){
        super(rawString);
    }

    display(){
        console.log(this.reverse());
    }
}

export default DisplayReversedString;