//keep profit for all items, for all other items

class Solution {
    maxProfit(prices) {

        let profits = [];
        let cnt = 0;

        for(let i = 0; i < prices.length; i++){
            for(let j = i + 1; j < prices.length; j++){
                let buy = prices[i];
                let sell = prices[j];
                let profit = sell - buy;

                profits.push(profit);
            }
        }

        console.log(profits);

        for(let profit of profits){
            if(profit <= 0){
                cnt ++;
            }
        }

        if(cnt === profits.length){
            console.log(cnt);
            return 0;
        }

        let max = Math.max(...profits);
        console.log(max);
        return max;

    }
}

prices = [10,1,5,6,7,1]; // 6
prices = [10,8,7,5,2]; //0, no profit can be made
// prices = [2,4,1]; //2

solution = new Solution();
solution.maxProfit(prices);