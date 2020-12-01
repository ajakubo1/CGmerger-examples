
// Code taken from https://www.codingame.com/ide/puzzle/coders-strike-back for
// javascript

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/


// game loop
while (true) {
    let inputs: string[] = readline().split(' ');
    const x: number = parseInt(inputs[0]);
    const y: number = parseInt(inputs[1]);
    const nextCheckpointX: number = parseInt(inputs[2]); // x position of the next check point
    const nextCheckpointY: number = parseInt(inputs[3]); // y position of the next check point
    const nextCheckpointDist: number = parseInt(inputs[4]); // distance to the next checkpoint
    const nextCheckpointAngle: number = parseInt(inputs[5]); // angle between your pod orientation and the direction of the next checkpoint
    inputs = readline().split(' ');
    const opponentX: number = parseInt(inputs[0]);
    const opponentY: number = parseInt(inputs[1]);

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');


    // You have to output the target position
    // followed by the power (0 <= thrust <= 100)
    // i.e.: "x y thrust"
    console.log(nextCheckpointX + ' ' + nextCheckpointY + ' 80');
}
