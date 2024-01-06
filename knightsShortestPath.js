function knightMoves([originX, originY], [destinationX, destinationY]) {
    // Validate inputs.
    const inputsAreValid = [originX, originY, destinationX, destinationY].every((input) => {
        return input >= 0 && input <= 7;
    });
    if (!inputsAreValid) {
        console.log('Invalid inputs.');
        return null;
    }

    // Create the root.
    const root = new Node([originX, originY], null);
}

class Node {
    constructor([x, y], parent) {
        this.value = [x, y];
        this.parent = parent;
    }
}
