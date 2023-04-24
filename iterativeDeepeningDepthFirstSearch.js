require('./depthLimitedSearch')

// This function uses a loop to gradually increase the depth limit of the depth-limited search until a solution is found.
// It repeatedly calls the depthLimitedSearch function with increasing depth limits
// until a path is found or until the depth limit becomes too large to be feasible.
function iterativeDeepeningDepthFirstSearch(startNode, goalNode) {
    let depth = 0;
    while (true) {
        if (depthLimitedSearch(startNode, goalNode, depth)) {
            return true;
        }
        depth++;
    }
}
