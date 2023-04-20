// Print odds 1-20
for (var i = 1 ; i <= 20; i++) {
    if (i%2 != 0) {
        console.log(i);
    }
}
// Decreasing Multiples of 3 
for (var i = 100 ; i >= 0 ; i--) {
    if (i%3 == 0) {
        console.log(i);
    }
}

// Print the sequence 
var arr = [];
for (var i = 4; i>= -3.5 ; i=i -1.5){
    arr.push(i)   
}
console.log (arr)

// Sigma 
var sum = 0;
for (var i = 1; i <= 100; i++) {
    sum += i;
}
console.log (sum)

// Factorial 
var factorial = 1; 
for (var i = 1; i <=12 ; i++){
    factorial = factorial*i
}
console.log (factorial)