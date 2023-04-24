// we use a priority queue to keep track of the nodes to be visited, 
// with the priority of each node being its current cost from the start node. 
// We start by pushing the startNode onto the priority queue with a priority of zero.
// For each popped node, we mark it as visited and check if it is the goalNode. 
// If it is the goalNode, we terminate the search and return the path to it. Otherwise, 
// we update the cost to reach each unvisited neighbor and add it to the priority queue with its updated cost as its priority.
//  We also update the cameFrom and costSoFar maps to keep track of the path and cost to reach each node.
function uniformCostSearch(startNode, goalNode) {
    let visited = new Set();
    let frontier = new PriorityQueue();
    frontier.enqueue(startNode, 0);
    let cameFrom = new Map();
    let costSoFar = new Map();
    cameFrom.set(startNode, null);
    costSoFar.set(startNode, 0);

    while (!frontier.isEmpty()) {
        let currentNode = frontier.dequeue().element;
        visited.add(currentNode);

        if (currentNode === goalNode) {
            return constructPath(cameFrom, currentNode);
        }

        for (let neighbor of currentNode.neighbors) {
            let newCost = costSoFar.get(currentNode) + neighbor.cost;
            if (!visited.has(neighbor) && (!costSoFar.has(neighbor) || newCost < costSoFar.get(neighbor))) {
                costSoFar.set(neighbor, newCost);
                let priority = newCost;
                frontier.enqueue(neighbor, priority);
                cameFrom.set(neighbor, currentNode);
            }
        }
    }

    return null;
}

class PriorityQueue {
    constructor() {
        this.elements = [];
    }

    enqueue(element, priority) {
        this.elements.push({ element, priority });
        this.elements.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.elements.shift();
    }

    isEmpty() {
        return this.elements.length === 0;
    }
}


// If we exhaust all nodes reachable from startNode without finding the goalNode, we return null to indicate that there is no path from startNode to goalNode. The constructPath function is a separate helper function that constructs the path to the goalNode using the cameFrom map.