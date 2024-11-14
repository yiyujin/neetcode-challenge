class Solution {
    twoSum(numbers, target) {

        for(let i = 0 ; i < numbers.length; i++){
            let n = numbers[i];
            let m = target - n;

            // console.log(i, n, m);

            if( numbers.includes(m) ){
                let answer = [numbers.indexOf(n) + 1, numbers.indexOf(m) + 1];

                console.log(answer);
                return(answer);
            }
            
        }
    }
}


numbers = [1,2,3,4];
target = 3; //[1,2]

numbers = [2,3,4];
target = 6; //[1,3]

solution = new Solution();
solution.twoSum(numbers, target);