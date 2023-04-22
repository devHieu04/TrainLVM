function diff(s,t)
{
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
      sum += s.charCodeAt(i);
    }
    for (let i = 0; i < t.length; i++) {
      sum -= t.charCodeAt(i);
    }
    return String.fromCharCode(Math.abs(sum));
}