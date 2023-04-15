function ReverseWords(s) {
    var k  =s.split(" ");
    var i = k.map(function(w)
    {
        return w.split("").reverse().join("");
    });
    var h = i.join(" ");
    return h;
}
var s = "Let's take LeetCode contest";
var f = ReverseWords(s);
console.log(f);

