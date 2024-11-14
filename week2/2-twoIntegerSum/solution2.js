class Solution {
    twoSum(numbers, target) {
        const indexByNumber = new Map();

        console.log(indexByNumber)

        for(let i = 0; i < numbers.length; i++){
            const n = numbers[i];
            const m = target - n;
            const j = indexByNumber.get(m);

            if(j !== undefined ){
                console.log(i,j);
                return [i,j];

                // indexByNumber.set(n,i);
            }
        }
    }
}


numbers = [1,2,3,4];
target = 3;

solution = new Solution();
solution.twoSum(numbers, target);