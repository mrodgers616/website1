<html>
<body bgcolor = "#e3e1df">
    
    Pig-Latin:
    <?php 
    $original = $_POST["english"];
    $array = explode(" ", $original);

    $piglatin = "";
    foreach($array as $word)
    {
        $word = trim($word);
        $first = substr($word,0,1);
        $thsh = substr($word,0,2);
        $thshrest = substr($word,2, strlen($word)-2);
        $rest = substr($word,1,strlen($word)-1);

        if ($first == "a" || $first == "e" || $first == "i" || $first == "o" || $first == "u" ||$first == "A" || $first == "E" || $first == "I" || $first == "O" || $first == "U"){
          $piglatin .= (strlen($word)==1) ? $first." " : $word. "-way ";
        } 
        elseif ($thsh == "th" || $thsh == "sh" || $thsh == "bl" || $thsh == "br" || $thsh == "ch" || $thsh == "cl" || $thsh == "cr" || $thsh == "dr" || $thsh == "fl" || $thsh == "fr" || $thsh == "gl" || $thsh == "gr" || $thsh == "pl" || $thsh == "pr" || $thsh == "sc" || $thsh == "sk" || $thsh == "sl" || $thsh == "sm" || $thsh == "sn" || $thsh == "sp" || $thsh == "st" || $thsh == "sw" || $thsh == "tr" || $thsh == "tw" || $thsh == "wh" || $thsh == "wr") {
          $piglatin .= (strlen($word)==1) ? $first." " : $thshrest."-".$thsh. "ay ";
        } 
        else {
          $piglatin .= (strlen($word)==1) ? $first." " : $rest."-".$first. "ay ";
        }
    }
    
    echo $piglatin;


    ?> 
    
</body>
</html>