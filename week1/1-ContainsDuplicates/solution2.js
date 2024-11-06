class Solution {
    hasDuplicate(nums) {
        const sortedNums = [...nums].sort( (a, b) => a - b );
        console.log(`[${nums}] is sorted into [${sortedNums}]`);

        for(let i = 0; i < sortedNums.length - 1; i++){
            let a = sortedNums[i];
            let b = sortedNums[i + 1];

            console.log(a,b);

            if(sortedNums[i] == sortedNums[i + 1]){
                console.log(`for [${nums}], found duplicate for ${a}`);
                return true;
            }
        }

        console.log(`for [${nums}], found no duplicates`);
        return false;
        
    }
}

let nums = [1,2,3,4];
nums = [1,2,3,2];

solution = new Solution;
solution.hasDuplicate(nums);