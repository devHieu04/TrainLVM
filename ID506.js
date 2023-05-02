function ranks (scores)
{
    var sortScorces = [...scores].sort((a,b)=>b-a);
    var ranksScores ={};
    for( var i=0; i<sortScorces.length; i++)
    {
     if(i===0)
     {
        ranksScores[sortScorces[i]]="Gold Medal";
     }
     else if(i===1)
     {
        ranksScores[sortScorces[i]]="Silver Medal";
     }
     else if(i===2)
     {
        ranksScores[sortScorces[i]]="Bronze Medal";
     }
     else 
     {
        ranksScores[sortScorces[i]]=(i+1).toString();
     }
    }
     return scores.map((score)=>ranksScores[score]);
}