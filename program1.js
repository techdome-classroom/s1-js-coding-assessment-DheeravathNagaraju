const getTotalIsles = function (grid) {
  if (grid.length === 0 || grid[0].length === 0) {
    return 0;
  }
  const row = grid.length;
  const col = grid[0].length;
  const visit = Array.from({ length: row }, () => Array(col).fill(false));
  const direction = [
    [-1, 0],
    [1, 0],  
    [0, -1], 
    [0, 1],  
  ];
  function dfs(x, y) {
    if (x < 0 || x >= row || y < 0 || y >= col || grid[x][y] === 'W' || visit[x][y]) {
      return;
    }
    visit[x][y] = true;
    for (const [dx, dy] of direction) {
      dfs(x + dx, y + dy);
    }
  }

  let landCount = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 'L' && !visit[i][j]) {
        dfs(i, j);
        landCount++;
      }
    }
  }

  return landCount;
};

const grid1 = [
  ["L", "L", "L", "L", "W"],
  ["L", "L", "W", "L", "W"],
  ["L", "L", "W", "W", "W"],
  ["W", "W", "W", "W", "W"],
];
console.log(getTotalIsles(grid1));  // Output: 1

const grid2 = [
  ["L", "L", "W", "W", "W"],
  ["L", "L", "W", "W", "W"],
  ["W", "W", "L", "W", "W"],
  ["W", "W", "W", "L", "L"],
];
console.log(getTotalIsles(grid2));  // Output: 3
