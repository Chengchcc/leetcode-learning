/*
 * @lc app=leetcode.cn id=211 lang=javascript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start

var WordDictionary = function() {
    this.root = {}
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.root
    for (let ch of word) {
        if (!node[ch]) {
            node[ch] = {}
        }
        node = node[ch]
    }
    node.isEnd = true
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const dfs = (node, word) => {
        for (let i = 0; i < word.length; i++) {
            const ch = word[i]
            if (ch === '.') {
                for (const key in node) {
                    if (key === 'isEnd') {
                        continue
                    }
                    if (dfs(node[key], word.slice(i + 1))) {
                        return true
                    }
                }
                return false
            } else if (node[ch]) {
                node = node[ch]
            } else {
                return false
            }
        }
        return node.isEnd === true
    }
    return dfs(this.root, word)
};


/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

var obj = new WordDictionary()
obj.addWord('bad')
obj.addWord('dad')
obj.addWord('mad')
obj.addWord('pad')
obj.search('.ad')
// @lc code=end

