//"anagram"
//[ 'a', 'a', 'a', 'g', 'm', 'n', 'r']
//"aaagmnr"

class Solution {
    isAnagram(s, t) {
        s = s.split("");
        s = s.sort()
        s = s.join("");

        t = t.split("");
        t = t.sort();
        t = t.join("");

        console.log(s,t);
    
        if(s === t){
            console.log("true");
            return true;
        } else {
            console.log("false");
            return false;
        }

    }
}

let solution = new Solution();
// solution.isAnagram("racecar", "carrace");
// solution.isAnagram("jar", "jam");

solution.isAnagram("anagram", "nagaram");