const reverseString = function(str) {
    const splitString = str.split("");
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join("");
    
    return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
