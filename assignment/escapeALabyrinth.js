function solution(map) {
    const height = map.length;
    const width = map[0].length;
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]; // Right, Down, Left, Up
    const queue = [];
    const visited = Array.from({ length: height }, () => Array(width).fill(false));

    function isWithinBounds(x, y) {
        return x >= 0 && x < width && y >= 0 && y < height;
    }

    // Each queue element is [x, y, steps, canRemoveWall]
    queue.push([0, 0, 1, true]);
    visited[0][0] = true;

    while (queue.length > 0) {
        const [x, y, steps, canRemoveWall] = queue.shift();

        // Check if reached the exit
        if (x === width - 1 && y === height - 1) {
            return steps;
        }

        // Explore neighbors
        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            if (isWithinBounds(newX, newY)) {
                if (map[newY][newX] === 0 && !visited[newY][newX]) {
                    queue.push([newX, newY, steps + 1, canRemoveWall]);
                    visited[newY][newX] = true;
                } else if (map[newY][newX] === 1 && canRemoveWall) {
                    queue.push([newX, newY, steps + 1, false]);
                }
            }
        }
    }
}


console.log(solution([
    [0, 1, 1, 0],
    [0, 0, 0, 1],
    [1, 1, 0, 0],
    [1, 1, 1, 0]
])); // Should return 7

console.log(solution([
    [0, 0, 0, 0, 0, 0], 
    [1, 1, 1, 1, 1, 0], 
    [0, 0, 0, 0, 0, 0], 
    [0, 1, 1, 1, 1, 1], 
    [0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0]
])); // Should return 11

console.log(solution([
    [0, 1, 0, 0],
    [0, 0, 0, 1],
    [1, 1, 1, 0],
    [0, 0, 0, 0]
])); // Should return 7