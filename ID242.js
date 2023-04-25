function isAnagram(s,t)
{
    var sortS= s.split('').sort().join('');
    var sortT= t.split('').sort().join('');
    return sortT===sortS;
}