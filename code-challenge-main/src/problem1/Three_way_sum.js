//Three ways to sum to n


//using loop
var sum_to_n_a = function(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum=sum+i;
    }
    return sum;
};


//using math
var sum_to_n_b = function(n) {
    let sum = (n*(n+1))/2;
    return sum;
};


//using recursion
var sum_to_n_c = function(n) {
    let sum = 0;
    if (n === 1) {
        return 1;
    }
    sum = n + sum_to_n_c(n - 1);
    return sum;
};