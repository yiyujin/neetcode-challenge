//"abca"
/*
a
ab
abc --duplicate coming!
a
*/


class Solution {
    lengthOfLongestSubstring(s) {

        if(s === ""){
            return 0;
        }

        let temp = [];
        let cnts = [];

        for(let i = 0; i < s.length; i++){
            let prev = s[i];
            let next = s[i + 1];
            
            temp.push(prev);

            if(temp.includes(next)){
                console.log("duplicate!");
                cnts.push(temp.length);

                // temp = []; //reset temp

                while (temp.includes(next)) {
                    temp.shift();
                }
            }

            if(i === s.length - 1){
                cnts.push(temp.length);
            }
        }

        console.log(cnts);
        console.log(temp);

        let answer = Math.max(...cnts);
        console.log(answer);

        return answer;
    }
}

s = "zxyzxyz"; //1 2 3 1 2 3
//3

// s = "xxxx"
// 1

s = "pwwkew"; //pw 2, wke 3 //1 2 1 2 3
//3

// s = 'xxxx';
// //1

// s = "aa";
// //1

// s = "au";
// //2

// s = "dvdf";
// //3

solution = new Solution();
solution.lengthOfLongestSubstring(s);