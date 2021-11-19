/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 */

// @lc code=start

var Trie = function () {
  this.root = {};
};
Trie.prototype.insert = function (word) {
  let node = this.root;
  for (let ch of word) {
    if (!node[ch]) {
      node[ch] = {};
    }
    node = node[ch];
  }
  node.isEnd = true;
};

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const ans = new Set(),
    h = board.length,
    w = board[0].length;

  const tire = new Trie();
  for (const word of words) {
    tire.insert(word);
  }

  const dfs = (path, i, j, node) => {
    if (node.isEnd) {
      ans.add(path);
      //   return true;
    }
    if (i < 0 || j < 0 || i >= h || j >= w) return;
    const ch = board[i][j];
    if (!node[ch]) {
      return;
    }
    board[i][j] = "#";
    const newPath = path + ch;
    dfs(newPath, i + 1, j, node[ch]);
    dfs(newPath, i - 1, j, node[ch]);
    dfs(newPath, i, j + 1, node[ch]);
    dfs(newPath, i, j - 1, node[ch]);
    board[i][j] = ch;
  };

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      dfs("", i, j, tire.root);
    }
  }
  return [...ans];
};

// @lc code=end
