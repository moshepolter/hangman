const words = ['hello', 'name', 'watch', 'floor', 'house', 'chair', 'table', 'lion', 'king', 'hand', 'length', 'snake', 'office', 'flower', 'garden', 'finger', 'cigar']
const insults = ['YOU ARE A IDIOT', 'ARE YOU AS DUMB AS YOU LOOK', 'A 2 YEAR OLD COULD HAVE GOTTEN THIS RIGHT', 'YOU REALLY ARE THAT STUPID', 'JUST GARBAGE, THATS THE ONLY WORD I CAN DESCRIBE YOU AS', 'COMPLETE AND UTTER MORAN', 'JUST NO', 'HOW DID YOU PASS 1ST GRADE', 'YOU SHOULD GO SEE A DOCTOR IT SEEMS LIKE YOUR BRAIN IS MISSING']
const randnumForInsults = Math.floor(Math.random() * 9)
let randInsult = insults[randnumForInsults]
const randnum = Math.floor(Math.random() * 17)
let remaining = [];
let usedLetters = [];
let randWord = words[randnum];
for (let r = 0; r < randWord.length; r++) {
    remaining.unshift('-')
}
let count = 0 ;
const run = userGuess => {
    count++;
    if (count < 15) {
    for (let i = 0; i < randWord.length; i++) {
        if (userGuess === randWord[i]) {
            remaining.splice(i, 1, randWord[i])
            count--;
            if (remaining.join('') === randWord) {
                document.getElementById('word').innerHTML = `Congrats You Got The Word Correct, The Word Was '${randWord.toUpperCase()}', It Took You ${count} Attempts`
                setTimeout(function() {location.reload()}, 6000);
            }
        } else {
            usedLetters.unshift(userGuess);
        }
    }
    for (let s = 0; s < randWord.length-1; s++) {
        usedLetters.shift(); 
    }
    document.getElementById('word_c').innerHTML = `${remaining.join('')} / Letters already attempted: ${usedLetters.join(', ')}, ${15-count} Tries Left`

} else {
    document.getElementById('word').innerHTML = `To many Tries, The word was '${randWord.toUpperCase()}', also ${randInsult}`
    setTimeout(function() {location.reload()}, 7000);
}
}


console.log(randWord)