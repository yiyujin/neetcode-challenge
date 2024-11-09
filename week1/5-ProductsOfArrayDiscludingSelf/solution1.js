class Solution {
    productExceptSelf(nums) {
        let output = [];
        let totalProduct = 1;
        let zeroCount = 0;
        
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                zeroCount++;
            } else {
                totalProduct *= nums[i];
            }
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (zeroCount > 1) {
                output.push(0);
            } else if (zeroCount === 1) {
                output.push(nums[i] === 0 ? totalProduct : 0);
            } else {
                output.push(totalProduct / nums[i]);
            }
        }
        
        console.log(output);
        return output;
    }
}

let nums = [-1, 0, 1, 2, 3];
nums = [1,2,4,6];
let solution = new Solution();
solution.productExceptSelf(nums);