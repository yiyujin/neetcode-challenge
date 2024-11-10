class Solution{
    longestConsecutive(nums) {
        if(nums.length === 0 ){
            return 0;
        }

        nums.sort( ( a, b ) => a - b );

        console.log(nums);

        let cnt = 1; //current streak
        let maxCnt = 1; //max streak

        for(let i = 1; i < nums.length; i++){
            if( nums[i] === nums[i - 1]){
                continue;
            } else if( nums[i] === nums[i - 1] + 1 ){
                cnt++;
                console.log(`✅ ${nums[i]} vs. ${nums[i + 1]}`);
            } else {
                maxCnt = Math.max(maxCnt, cnt);
                cnt = 1; //reset cnt
            }

        }

        let result = Math.max(maxCnt, cnt);
        console.log(Math.max(maxCnt, cnt));

        return result;
    }
}

nums = [2,20,4,10,3,4,5]; //4 because [2,3,4,5]
// nums = [0,3,2,5,4,6,1,1]; //7
nums = [];
// nums = [-1,0]; //2
nums=[9,1,4,7,3,-1,0,5,8,-1,6];
nums=[2,20,4,10,3,4,5];

solution = new Solution();
solution.longestConsecutive(nums);