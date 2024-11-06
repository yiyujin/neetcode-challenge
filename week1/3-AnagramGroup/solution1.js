class Solution {
    groupAnagrams(arr) {
    
        let results = [];
        let data = [];

        for (let i = 0; i < arr.length; i++) {
            let str = arr[i];
            let cnts = {};

            for (let j = 0; j < str.length; j++) {
                //Make dictionary with letter - cnt { "a" : 1, "c" : 1, "t" ; 1}
                let letter = str[j];

                if( cnts[letter] == undefined ){
                    cnts[letter] = 1;
                } else {
                    cnts[letter] ++;
                }
            }

            //convert dictionary to arr, then to string
            let key = Object.keys(cnts) //Get keys of cnts ["c", "a", "t"]
                .sort() //Sort them in order ["a","c","t"]
                .map( letter => `${letter}:${cnts[letter]}` )//Map to "letter:count" => ["a:1", "c:1", "t:1"]
                .join(','); //single string for comparison "a:1,c:1,t:1"
            

            data.push(key);

            //FIND MATCH AND GROUP

            if(results[key] == undefined){
                results[key] = [ str ]; //add that key and str as item in array
            } else {
                results[key].push(str); //add the str as item in array
            }
        }

        //PRINT IN FORMAT
        let result = Object.values(results);
        console.log(results);
        return result;
    }
}

let arr = ["act", "pots", "tops", "cat", "stop", "hat"];

let solution = new Solution();
solution.groupAnagrams(arr);
