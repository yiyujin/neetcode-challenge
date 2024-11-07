class Solution {
    topKFrequent(nums, k) {
        //FOR EACH ITEM, KEEP TRACK OF CNT
        let data = {};

        for(let i = 0; i < nums.length; i++){
            
            if( data[nums[i]] == undefined ){
                data[nums[i]] = 1;
            } else {
                data[nums[i]] ++;
            }

        }

        console.log(data);

        //SORT THE DICTIONARY BY VALUE
        let sortedData = Object.entries(data) //[ ['1',2], ['2',2], ['3',2] ] convert dict to arr
        .sort( (a, b) => b[1] - a[1] );

        console.log(sortedData); //[ [ '1', 3 ], [ '2', 2 ], [ '3', 2 ] ]

        let results = [];

        for(let i = 0; i < k; i++){
            results.push(sortedData[i][0]);
        }

        results.sort();

        console.log(results);

        return results;
    }
}


let nums = [1,1,2,2,3,3,3];
let k = 2;

nums = [7,7];
k = 1;

solution = new Solution();
solution.topKFrequent(nums, k);