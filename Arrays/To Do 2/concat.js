//Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function concat(array1, array2) {
    var newArray = [];
    var currentIndex = 0;
    for (var i=0; i <array1.length; i++) {
        newArray[currentIndex] = array1[i];
        currentIndex++;
    }
    for (var i = 0; i < array2.length; i++) {
        newArray[currentIndex] = array2[i];
        currentIndex++;
    }
    return newArray
}