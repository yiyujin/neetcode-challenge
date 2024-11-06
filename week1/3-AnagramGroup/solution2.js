class Solution {
    groupAnagrams(arr) {
        const results = new Map();

        for (let i = 0; i < arr.length; i++) {
            let str = arr[i];
            const cnts = {};

            // Count each letter’s occurrences
            for (const letter of str) {
                cnts[letter] = (cnts[letter] || 0) + 1;
            }

            // Create a unique key by sorting the letter-count pairs
            const key = Object.keys(cnts)
                .sort()
                .map(letter => `${letter}:${cnts[letter]}`)
                .join(',');

            // Add to results (Map) or append if the key already exists
            if (!results.has(key)) {
                results.set(key, [str]);
            } else {
                results.get(key).push(str);
            }
        }

        // Convert Map values to array format directly
        const result = Array.from(results.values());
        console.log(result);
        return result;
    }
}

let arr = ["act", "pots", "tops", "cat", "stop", "hat"];
let solution = new Solution();
solution.groupAnagrams(arr);