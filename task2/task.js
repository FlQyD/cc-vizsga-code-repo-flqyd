export function countDifferentLetters(sentence) {

    const CHAR_CODE_OF_A = "a".charCodeAt(0);
    const CHAR_CODE_OF_z = "z".charCodeAt(0);

    sentence = sentence.toLowerCase();
    const splittedSentence = sentence.split("");

    const onlyAbcChars = splittedSentence.filter(char => {
        if (char.charCodeAt(0) >= CHAR_CODE_OF_A &&
            char.charCodeAt(0) <= CHAR_CODE_OF_z    ) {
                return true;
        }
        return false;
    })
    
    const uniques = getUniqueArray(onlyAbcChars);
    return uniques.length;
}
function getUniqueArray(array) {
    return [...new Set(array)];
}