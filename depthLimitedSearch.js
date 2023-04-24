// is a recursive function that searches for a path from the start node to the goal node within a given depth limit.
//  It returns true if a path is found, and false otherwise. If the depth limit is zero, 
// the function returns false without searching any further.
//  Otherwise, it recursively calls itself on all neighbors of the current node, 
// decrementing the depth limit for each call.
function depthLimitedSearch(startNode, goalNode, limit) {
    function recursiveDLS(node, goalNode, limit) {
        if (node === goalNode) {
            return true;
        } else if (limit === 0) {
            return false;
        } else {
            for (let neighbor of node.neighbors) {
                if (recursiveDLS(neighbor, goalNode, limit - 1)) {
                    return true;
                }
            }
            return false;
        }
    }
    return recursiveDLS(startNode, goalNode, limit);
}
