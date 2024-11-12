//"anagram", "nagaram"
//{ a: 3, n: 1, g: 1, r: 1, m: 1 } { n: 1, a: 3, g: 1, r: 1, m: 1 } //dictionary key = character
//[ 'a', 'n', 'g', 'r', 'm' ] //array with key

class Solution {
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const countS = {};
        const countT = {};

        for (let i = 0; i < s.length; i++) {
            //If letter is new, count is by default 1
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

        console.log(countS, countT);


        //COMPARE DICTIONARIES - 같은 키끼리 값을 비교
        const keys = Object.keys(countS);
        console.log(keys);

        for (let i = 0; i < keys.length; i++ ) {
            console.log(countS[keys[i]], ' vs ', countT[keys[i]]);

            if (countS[keys[i]] !== countT[keys[i]]) {
                return false;
            }
        }
        
        return true;
    }
}

let solution = new Solution();
// solution.isAnagram("racecar", "carrace");
// solution.isAnagram("jar", "jam");
solution.isAnagram("anagram", "nagaram");