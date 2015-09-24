/**
 * Created by Clint on 9/24/2015.
 */

/**
 * Created by Clint on 9/24/2015.
 * addlength3
 */

console.log("**addlength3**");

var words1 = ["apple", "pear"];
var words2 = ["you", "can", "win"];

function addLength(wordsArr) {
    return _.map(wordsArr, wordsWithLength, 0);
}

function wordsWithLength(word) {
    return word + " " + word.length;
}


console.log(addLength(words1));