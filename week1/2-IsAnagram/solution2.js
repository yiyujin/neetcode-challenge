class Solution {
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const countS = {};
        const countT = {};

        for (let i = 0; i < s.length; i++) {
            //If letter is new, default 1
            if (countS[s[i]] == undefined) {
                countS[s[i]] = 1;
            } else {
                countS[s[i]] ++;
            }

            if (countT[t[i]] == undefined) {
                countT[t[i]] = 1;
            } else {
                countT[t[i]] ++;
            }

        }

        for (const key in countS) {
            if (countS[key] !== countT[key]) {
                return false;
            }
        }
        
        return true;
    }
}

let solution = new Solution();
solution.isAnagram("racecar", "carrace");
solution.isAnagram("jar", "jam");