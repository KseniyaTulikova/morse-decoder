const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let message = '';
    expr.match(/.{10}/g).forEach(binaryCode => {
        message += binaryCode != "**********" ? decodeBinaryToAlphabet(binaryCode) : " "; 
    });

    return message;
}
const decodeBinaryToAlphabet = (binaryCode) => {
    return decodeMorseToAlphabet(decodeBinaryToMorse(binaryCode));
}

const  decodeMorseToAlphabet = (morseCode) => {
    return MORSE_TABLE[morseCode];
}

const decodeBinaryToMorse = (binaryCode) => {
    let morseCode = '';
    binaryCode.match(/.{2}/g).forEach(code => {
        switch(code) {
            case '11': morseCode += '-';
                break;
            case '10': morseCode += '.';
                break;
            default:
        }
    });
    return morseCode;
}

module.exports = {
    decode
};
