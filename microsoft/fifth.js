/* Largest Divisible Subset */
var largestDivisibleSubset = function(nums) 
{
    if (nums.length === 0) 
    {
        return [];
    }
    nums.sort((a, b) => a - b);
    let dp = new Array(nums.length).fill(1);
    let prev = new Array(nums.length).fill(-1);
    let max = 1;
    let maxIndex = 0;
    for (let i = 1; i < nums.length; i++) 
    {
        for (let j = 0; j < i; j++)
         {
            if (nums[i] % nums[j] === 0 && dp[i] < dp[j] + 1) 
            {
                dp[i] = dp[j] + 1;
                prev[i] = j;
                if (dp[i] > max) 
                {
                    max = dp[i];
                    maxIndex = i;
                }
            }
        }
    }
    let res = [];
    for (let i = 0; i < max; i++) {
        res.push(nums[maxIndex]);
        maxIndex = prev[maxIndex];
    }
    return res;
};