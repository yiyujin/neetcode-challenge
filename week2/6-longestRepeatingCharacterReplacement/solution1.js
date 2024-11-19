class Solution {
    characterReplacement(s, k) {
        let data = {};
        let replace = 0;

        for(let i = 0; i < s.length; i++){
            //if there is a key, increment its count
            //else, add that key with cnt as 1
            let key = s[i];

            data[key] = ( data[key] || 0 ) + 1;
        }


        //make an array with dictionary, to get max value
        let max = Object.keys(data).reduce( (a, b) => data[a] > data[b] ? a : b );
        console.log(max);

        //check if there's space left
        let space = s.length - data[max];
        console.log(space);

        //compute possible replace numbers
        if( space < k ){
            console.log('No space');
            replace = space;
        } else if ( space >= k ){
            console.log('Yes space');
            replace = k;
        } else {
            replace = 0;
        }

        console.log(replace);

        let answer = data[max] + replace;
        console.log(answer);
        
        return answer;
    }
}

s = "XYYX";
k = 2;
//4

// s = "AAABABB";
// k = 1;
// //5

// s = "AAAA";
// k = 2;
//4

s = "AABABBA";
k = 1;
//4

solution = new Solution();
solution.characterReplacement(s,k);