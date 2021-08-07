//Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don't use built-in functions.
//Second: allow negative shiftBy (shift L, not R).
//Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
//Fourth: minimize the touches of each element.


function rotate(array, moveBy) {
    var rotations;
    if (moveBy > 0) {
        rotations = moveBy % array.length;
    } else {
        rotations = Math.abs(moveBy) % array.length;
    }
    if (moveBy > 0) {
        for (var i = 0; i < rotations; i++) {
            var temp = array[array.length - 1];
            for (var j = array.length - 2; j >= 0; j--) {
                array[j + 1] = array[j];
            }
            array[0] = temp;
        }
    } else {
        for (var i = 0; i < rotations; i++) {
            var temp = array[0];
            for (var j = 1; j < array.length; j++) {
                array[j - 1] = array[j];
            }
            array[array.length - 1] = temp
        }
    }
}


function rotate2(array, moveBy) {
    reverse(array);
    var rotations;
    if (moveBy > 0) {
        rotations = moveBy % array.length;
    } else {
        rotations = Math.abs(moveBy) % array.length;
    }
    if (moveBy>0) {
        reverse(array, 0, rotations-1)
        reverse(array, rotations, array.length-1)
    } else {
        reverse(array, 0, array.length-rotations-1);
        reverse(array, array.length-rotations , array.length-1)
    }
}

function reverse(array, startingIndex=0, endingIndex = array.length-1) {
    var numIterations = 0
    for (var k = startingIndex; k < (startingINdex + endingIndex)/2; k++) {
        var temp = array[k];
        array[k] = array[endingIndex - numIterations];
        array[endingIndex - numIterations] = temp;
        numIterations++;
    }
}