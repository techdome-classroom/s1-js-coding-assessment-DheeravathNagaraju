const decodeTheRing = function (s, p) {
    const x = s.length;
    const y = p.length;
    const dy = Array.from({ length: x + 1 }, () => Array(y + 1).fill(false));
    dy[0][0] = true;
    for (let j = 1; j <= y; j++) {
        if (p[j - 1] === '*') {
            dy[0][j] = dy[0][j - 1];
        }
    }
    for (let i = 1; i <= x; i++) {
        for (let j = 1; j <= y; j++) {
            if (p[j - 1] === s[i - 1] || p[j - 1] === '?') {
                dy[i][j] = dy[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                dy[i][j] = dy[i - 1][j] || dy[i][j - 1];
            }
        }
    }
    return dy[x][y];
};
