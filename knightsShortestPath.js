function knightMoves([originX, originY], [destinationX, destinationY]) {
    // Validate inputs.
    const inputsAreValid = [originX, originY, destinationX, destinationY].every((input) => {
        return input >= 0 && input <= 7;
    });
    if (!inputsAreValid) {
        console.log('Invalid inputs.');
        return null;
    }
}
