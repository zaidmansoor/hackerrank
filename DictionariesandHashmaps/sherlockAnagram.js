// Returns the number of anagrams in the string.
function sherlockAndAnagrams(s) {
    let num = 0;
    
    for (var len = 1; len < s.length; len++) {
        for (var i = 0; i + len <= s.length; i++) {
            for (var j = i + 1; j + len <= s.length; j++) {
                var end1 = i + len;
                var end2 = j + len;
                //if (end1 <= s.length && end2 <= s.length) {
                    var subString1 = s.substring(i, end1);
                    var subString2 = s.substring(j, end2);
                    
                    if (subString1 === subString2) {
                        num++;
                    } else if (subString1.length === subString2.length) {
                        var letters = new Array(26).fill(0);
                        
                        for (var ii = 0; ii < subString1.length; ii++) {
                            var index1 = subString1.toLowerCase().charCodeAt(ii) - 97;
                            var index2 = subString2.toLowerCase().charCodeAt(ii) - 97;
                            
                            letters[index1]++;
                            letters[index2]--;
                        }
                        
                        var found = true;
                        for (var yy = 0; yy < letters.length; yy++) {
                            if (letters[yy] !== 0) {
                                found = false;
                                break;
                            }
                        }
                        
                        if (found) {
                            num++
                        }
                    }
                //}
            }
        }
    }
    
    return num;
}