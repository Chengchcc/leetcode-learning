/*
 * @lc app=leetcode.cn id=780 lang=javascript
 *
 * [780] 到达终点
 */

// @lc code=start
/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function(sx, sy, tx, ty) {
    /**
     * 可以逆向思考：(tx, ty) -> (tx - ty, ty), 当tx >= ty时
     *                         (tx, ty - tx), 当tx < ty
     * 因此，逆向只有一条唯一的搜索路径
     */

    while (tx > sx && ty > sy) {
        if (tx > ty) {
            tx = tx % ty;
        } else {
            ty = ty % tx;
        }
    }
    // (x, y)->(x, kx+y)的情况
    if (tx == sx) {
        return ty >= sy && (ty - sy) % sx == 0;
    }
    // (x, y)->(x+ky, y)的情况
    if (ty == sy) {
        return tx >= sx && (tx - sx) % sy == 0;
    }
    return false;

};
// @lc code=end

