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
    let parentQueue = [root];

    // Initialize the children queue for breadth first tree traversal.
    let childrenQueue = [];

    while (shortestPaths.length === 0) {
        const [currentParentNodeX, currentParentNodeY] = parentQueue[0].value;
        if (currentParentNodeX === destinationX && currentParentNodeY === destinationY) {
            // If current parent node's coordinates matches the coordinates of the destination, append it to the shortestPath array

            // Trace the path
            const path = [];
            let currentNode = parentQueue[0];
            while (currentNode !== null) {
                path.unshift(currentNode.value);
                currentNode = currentNode.parent;
            }
            // Append path to the shortest path array
            shortestPaths.push(path);
        } else if (shortestPaths.length === 0) {
            // If current parent node's coordinates do not match the coordinates of the destination and there is still no path found, calculate the next valid coordinates

            // Get the valid coordinates the Knight can go base on its current location (current parent node's coordinates)
            const [currentNodeX, currentNodeY] = parentQueue[0].value;
            const nextCoordinates = [
                [currentNodeX - 1, currentNodeY - 2],
                [currentNodeX - 2, currentNodeY - 1],
                [currentNodeX - 2, currentNodeY + 1],
                [currentNodeX - 1, currentNodeY + 2],
                [currentNodeX + 1, currentNodeY - 2],
                [currentNodeX + 2, currentNodeY - 1],
                [currentNodeX + 2, currentNodeY + 1],
                [currentNodeX + 1, currentNodeY + 2],
            ].filter(([x, y]) => {
                // Only get the coordinates that are valid in the chessboard (not out of bounds and not equal to the origin)
                return x >= 0 && x <= 7 && y >= 0 && y <= 7 && x !== originX && x !== originY;
            });

            for (let i = 0; i < nextCoordinates.length; i++) {
                // Populate the current parent node with their children nodes containing the next possible coordinates base on the coordiantes of the parent node.
                parentQueue[0][`child${i}`] = new Node(nextCoordinates[i], parentQueue[0]);

                // Append child node to the children queue.
                childrenQueue.push(parentQueue[0][`child${i}`]);
            }
        }
        // Remove the current parent from the parent queue.
        parentQueue.shift();

        if (parentQueue.length === 0 && shortestPaths.length === 0) {
            // If none of the parent nodes in parentQueue matched the coordinates of the destination, traverse down to their children nodes for possible matches.

            // Set the children nodes in the childrenQueue to be the new parent nodes by moving them to the parent queue.
            parentQueue = parentQueue.concat(childrenQueue);
            childrenQueue = [];
        }
    }
    // Ouput result to the user.
    console.log(`You made it in ${shortestPaths[0].length} moves!  Here's your path:`);
    shortestPaths[0].forEach((coordinate) => {
        console.log(JSON.stringify(coordinate));
    });
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
