function convertStringToNumberSequence(str) {
    const map = new Map();
    let num = 1;
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (!map.has(char)) {
            map.set(char, num);
            num++;
        }
    }
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        result += map.get(char);
    }
    return result;
}
var isIsomorphic = function(s, t) {
    return convertStringToNumberSequence(s)===convertStringToNumberSequence(t)
};