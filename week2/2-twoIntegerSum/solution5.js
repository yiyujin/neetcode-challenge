//two pointers

class Solution{
    twoSum(numbers, target) {
        let p1 = 0;
        let p2 = numbers.length - 1;

        for(let i = 0; i < numbers.length; i++){
            let sum = numbers[p1] + numbers[p2];
        
            if(sum === target){
                console.log([p1, p2]);
                return [p1 + 1, p2 + 1]; //+1 just for sake of index condition
            } else if (sum < target){
                p1 ++; //target is still larger, have to increase p1
            } else if (sum > target){
                p2 --;
            }
            
        }
    }
}