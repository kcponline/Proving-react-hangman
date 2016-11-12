function hangperson (Word) {
    this.word = word; 
    this.wordLength = word.Length;   //budilding constructor
    this.guessed = [];
    this.guessesRemaining = 10;
    this maxGuesses =10;
}

//----serialize:
hangperson.prototype.serialize = function(includeWrod){
    //bascially make a copy of the object.
    var result = {};
    result.wordLength = this.wordLength;
    result.guessed = this.wordLength;
    result.guessesRemaining = this.guessesRemaining;
    result.maxguesses = this.maxGuesses;

    if (includeWrod) {
        result.word = word;
    }

    return result;

}


hangperson.prototype.isGameOver = function (){
    //word guess or no more guess is left.
    return this.isWordGuessed() ||
           this.guessesRemaining ==0;     
}

hangperson.prototype.isWordGuessed = function (){
    for (var i = 0; i < this.wordlength; i++) {
        var thisLetter = this.word.charAt[i];
        if (this.guessed.indexOf(thisLetter) < 0) {
            return false;
        }
    }
    return ture
}

hangperson.prototype.guess = function (letter){
    if(this.word.indexOf(letter) < 0 ){
        this.guessed.push(letter);
        this.guessesRemaining--;
    }else{

    }
}