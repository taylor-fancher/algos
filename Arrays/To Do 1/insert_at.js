// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt(array, value, index) {
    for (var i = array.length -1; i >= index; i --) {
        array[i + 1] = array[i]
    }
    array[index] = value

    console.log(array)
}