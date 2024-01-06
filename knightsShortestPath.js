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

    // Initialize the queue for breadth first tree traversal.
    const queue = [root];
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
