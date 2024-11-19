//numbers = [2,3,4];
//taget = 6;
//a = [undefined, undefined, 0, 1, 2]

class Solution {
    twoSum(numbers, target) {

        let a =[];

        for(let i = 0 ; i < numbers.length; i++){
            let n = numbers[i]; //2
            let m = target - n; //4

            if (a[m] !== undefined) { //if a[m] exists,
                let result = [a[m] + 1, i + 1]; //+1 cuz index starts at 1

                console.log(`found a[${m}]`);
                console.log(a[m]);
                // console.log(result);
                // return result;
            }

            a[n] = i; //store

            console.log(a);

        }
    }
}


numbers = [1,2,3,4];
target = 3; //[1,2]

numbers = [2,3,4];
target = 6; //[1,3]

solution = new Solution();
solution.twoSum(numbers, target);