function solution(integer) {
    let num = integer;
    let steps = 0;

    if (num <= 1) {
        return steps;
    }

    while (num > 1) {
        if (num % 2 === 0) {
            num /= 2;
        } else if ((num + 1) % 4 === 0 && num !== 3) {
            num += 1;
        } else {
            num -= 1;
        }

        steps++;
    }
    return steps;
}

console.log(solution(15)); // Should return 5
console.log(solution(10)); // Should return 4
console.log(solution(2)); // Should return 1
console.log(solution(0)); // Should return 0
console.log(solution(25)); // Should return 6
