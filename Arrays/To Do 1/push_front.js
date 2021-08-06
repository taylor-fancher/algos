// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function pushFront(array, value) {
    for (var i = array.length - 1; i >= 0; i --) {
        array[i + 1] = array[i];
    }
    array[0] = value;

    console.log(array)
}
