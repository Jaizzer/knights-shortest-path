function knightMoves([originX, originY], [destinationX, destinationY]) {
    // Validate inputs.
    const inputsAreValid = [originX, originY, destinationX, destinationY].every((input) => {
        return input >= 0 && input <= 7;
    });
    if (!inputsAreValid) {
        console.log('Invalid inputs.');
        return null;
    }

    // Initialize shortest paths array.
    const shortestPaths = [];

    // Create the root.
    const root = new Node([originX, originY], null);

    // Initialize the parentQueue for breadth first tree traversal.
    const parentQueue = [root];

    // Initialize the children queue for breadth first tree traversal.
    const childrenQueue = [];

    while (parentQueue.length !== 0) {
        // If current parent node's coordinates matches the coordinates of the destination, append it to the shortestPath array.
        const [currentParentNodeX, currentParentNodeY] = parentQueue[0].value;
        if (currentParentNodeX === destinationX && currentParentNodeY === destinationY) {
            // Trace the path
            const path = [];
            let currentNode = parentQueue[0];
            while (currentNode !== null) {
                path.unshift(currentNode.value);
                currentNode = currentNode.parent;
            }
            // Append path to the shortest path array.
            shortestPaths.push(path);
        } else {
            // Get the possible coordinates the Knight can go base on its current location
            const [currentNodeX, currentNodeY] = parentQueue[0].value;
            let nextCoordinates = [
                [currentNodeX - 1, currentNodeY - 2],
                [currentNodeX - 2, currentNodeY - 1],
                [currentNodeX - 2, currentNodeY + 1],
                [currentNodeX - 1, currentNodeY + 2],
                [currentNodeX + 1, currentNodeY - 2],
                [currentNodeX + 2, currentNodeY - 1],
                [currentNodeX + 2, currentNodeY + 1],
                [currentNodeX + 1, currentNodeY + 2],
            ].filter(([x, y]) => {
                // Only get the coordinates that are valid in the chessboard.
                return x >= 0 && x <= 7 && y >= 0 && y <= 7;
            });

            for (let i = 0; i < nextCoordinates.length; i++) {
                // Populate the current node (current coordinate location) with children nodes (next possible coordinate locations).
                parentQueue[0][`child${i}`] = new Node(nextCoordinates[i], parentQueue[0]);
            }
        }
    }
}

class Node {
    constructor([x, y], parent) {
        this.value = [x, y];
        this.parent = parent;
        this.child0 = null;
        this.child1 = null;
        this.child2 = null;
        this.child3 = null;
        this.child4 = null;
        this.child5 = null;
        this.child6 = null;
        this.child7 = null;
    }
}

// knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);
// knightMoves([0, 0], [7, 7]);
