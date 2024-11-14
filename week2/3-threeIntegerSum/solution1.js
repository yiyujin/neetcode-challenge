class Solution {
    threeSum(nums) {
        nums.sort( (a, b) => a - b );

        console.log(nums);

        let output = [];
        
        for(let i = 0; i < nums.length; i++){
            let n = nums[i];
            let target = -n;

            let nums2 = new Array(...nums);
            nums2.splice(i,1);

            // console.log(nums2);

            for(let j = 0; j < nums2.length; j++){
                for(let k = j + 1; k < nums2.length; k++){
                
                    let sum = nums2[j] + nums2[k];

                    if( sum === target ){
                        let triplet = [ nums[i], nums2[j], nums2[k] ];

                        triplet.sort( (a, b) => a - b );

                        output.push(`${triplet}`); //string for Set
                    }
                }
            }
        }

        console.log(output);

        let uniqueSet = new Set(output);
        console.log(uniqueSet); //{ '-1,-1,2', '-1,0,1' }

        //CONVERT BACK TO ARRAY
        let answer = Array.from(uniqueSet).map(item => {
            return item.split(',').map(Number); // Split by commas, and convert each part to a number
        });

        console.log(answer);
        return answer;

    }
}

nums = [-1,0,1,2,-1,-4];
//output = [[-1,-1,2],[-1,0,1]]

solution = new Solution();
solution.threeSum(nums);