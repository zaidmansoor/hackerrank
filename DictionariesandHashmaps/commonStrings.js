// Detect common strings
function twoStrings(s1, s2) {
    const arr = new Array(26).fill(0);
    
    for(let i = 0; i < s1.length; i++) {
        const index = s1[i].toLowerCase().charCodeAt(0) - 97;
        arr[index] -=1;
    }
    
    for(let i = 0; i < s2.length; i++) {
        const index = s2[i].toLowerCase().charCodeAt(0) - 97;
        
        if (arr[index] < 0) {
            return "YES"
        }
    }
    
    return "NO";
}