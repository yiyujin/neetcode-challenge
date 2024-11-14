//computer all possible pairs

class Solution {
    twoSum(numbers, target) {

        for(let i = 0 ; i < numbers.length; i++){

            for(let j = i + 1; j < numbers.length; j++){
                // console.log(i,j);
                let sum = numbers[i] + numbers[j];

                if( sum === target ){
                    console.log([i + 1, j + 1]);
                    return([i + 1, j + 1]);
                }
            }
        }
    }
}


numbers = [1,2,3,4];
target = 3;

solution = new Solution();
solution.twoSum(numbers, target);