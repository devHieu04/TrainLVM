var uniqueMorseRepresentations = function(words) {
    const morseCodes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const transformations = new Set();
    
    for (let word of words) {
        let transformation = "";
        for (let i = 0; i < word.length; i++) {
            transformation += morseCodes[word.charCodeAt(i) - 97];
        }
        transformations.add(transformation);
    }
    
    return transformations.size;
};