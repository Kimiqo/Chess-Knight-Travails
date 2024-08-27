const gameboard = Array(8).fill().map(() => Array(8).fill(0));

function knightMoves(start, end) {
    const directions = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    // Queue for BFS, storing position, distance, and the path taken
    let queue = [];
    queue.push([start, 0, [start]]);  // [current position, current distance, path]

    while (queue.length > 0) {
        let [[x, y], dist, path] = queue.shift();

        // If the knight has reached the target
        if (x === end[0] && y === end[1]) {
            return path;  // Return the path taken to reach the end position
        }

        // Check all 8 possible moves
        for (let [dx, dy] of directions) {
            let nx = x + dx;
            let ny = y + dy;

            // Check if the move is within bounds and not yet visited
            if (nx >= 0 && ny >= 0 && nx < 8 && ny < 8 && gameboard[nx][ny] === 0) {
                gameboard[nx][ny] = dist + 1;
                queue.push([[nx, ny], dist + 1, [...path, [nx, ny]]]);
            }
        }
    }

    return [];  // If no path found
}

console.log(knightMoves([0,0],[7,7]));  // should output the path taken
