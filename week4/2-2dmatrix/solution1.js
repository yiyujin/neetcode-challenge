class Solution {
    searchMatrix(matrix, target) {
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[i].length; j++){
                if(matrix[i][j] ===  target){
                    console.log(true);
                    return true;
                }

            }
        }

        console.log(false);
        return false;
    }
}

matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]];
target = 10;
//true

Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 15
Output: false

solution = new Solution();
solution.searchMatrix(matrix, target);