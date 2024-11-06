class Solution {
    isAnagram(s, t) {
        let sortedS = s.split('').sort().join('');
        let sortedT = t.split('').sort().join('');

        if (sortedS === sortedT) {
            console.log('true');
            return true;
        } else {
            console.log('false');
            return false;
        }
    }
}

let solution = new Solution();
solution.isAnagram("racecar", "carrace");
solution.isAnagram("jar", "jam");