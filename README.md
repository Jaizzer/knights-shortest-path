# Knight Moves Algorithm

The `knightMoves` function implements an algorithm to find the shortest path a knight can take on a chessboard from an origin square to a destination square using breadth-first tree traversal.

## Function Signature

```javascript
function knightMoves([originX, originY], [destinationX, destinationY])
```

## Parameters:

-   `originX`, `originY`: Coordinates of the knight's starting position.
-   `destinationX`, `destinationY`: Coordinates of the intended destination for the knight.

## Algorithm Overview

1. Validate input coordinates to ensure they are within the chessboard bounds (0 to 7).
2. Initialize a shortest paths array to store the result.
3. Create a root node representing the knight's starting position.
4. Use breadth-first tree traversal to explore possible moves until the destination is reached.
5. Trace the path from the destination back to the origin.
6. Output the shortest path and the number of moves.

## Usage

```javascript
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
```

## Node Class

The Node class represents a node in the tree with information about the knight's position and its parent-child relationships.

```javascript
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
```

## Output

The function logs the result to the console, including the number of moves and the path in JSON format.

```css
You made it in 7 moves!  Here's your path:
[0, 0]
[2, 1]
[1, 3]
[3, 2]
[5, 3]
[6, 5]
[7, 7]
```

## Contribution

Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests. Please follow the code style and documentation guidelines to ensure a smooth integration of your contributions.

## License

This project is licensed under the [MIT License](LICENSE).
