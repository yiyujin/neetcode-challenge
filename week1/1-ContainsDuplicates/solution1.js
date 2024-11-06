class Solution {
    hasDuplicate(nums) {
        for(let i = 0 ; i < nums.length; i++){
            for(let j = i + 1 ; j < nums.length; j++){
                console.log(i, j);

                if(nums[i] === nums[j]){
                    console.log(`for [${nums}], found duplicate for ${nums[j]}`);
                    return true;
                }
            }
        }

        console.log(`for [${nums}], found no duplicates`);
        return false;
    }
}

let nums = [1,2,3,4];
// nums = [1,1,2,3];

solution = new Solution;
solution.hasDuplicate(nums);