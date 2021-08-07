//Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

function filter(array, min, max) {
    for (var i =0; i < array.length; i++) {
        if (arr[i] < min || arr[i] > max) {
            for (var k = i+1; k<array.length; k++) {
                array[k-1] = array[k];
            }
            array.length--;
            i--;
        }
    }
}