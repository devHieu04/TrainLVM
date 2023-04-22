function Cadies(s)
{
    var must = s.length/2;
    var diff=new Set(s);
    var cost = diff.size;

    return Math.max(must, cost);
}