class Solution{
    characterReplacement(s, k) {
        let res = 0;

        for (let i = 0; i < s.length; i++) {
            let count = new Map();
            let maxf = 0;

            for (let j = i; j < s.length; j++) {
                count.set(s[j], (count.get(s[j]) || 0) + 1);

                maxf = Math.max(maxf, count.get(s[j]));

                if ( (j - i + 1) - maxf <= k ) {
                    res = Math.max(res, j - i + 1);
                }

                console.log(i, count, maxf);
            }
        }
        console.log(res);
        return res;
    }
}

s = "ABABBA";
k = 2;

solution = new Solution();
solution.characterReplacement(s,k);