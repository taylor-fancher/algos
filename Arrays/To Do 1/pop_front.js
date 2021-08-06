// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

function popFront(array) {
    var removedValue = array[0];
    for (var i = 1; i < array.length; i ++) {
        array[i - 1] = array[i];
    }
    array.pop()

    console.log(removedValue)
}