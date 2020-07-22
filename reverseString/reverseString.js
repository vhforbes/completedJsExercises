const reverseString = function(string) {
    let array = [];
    array = string.split('');
    array = array.reverse()

    string = array.join('');

    return string
}

module.exports = reverseString
