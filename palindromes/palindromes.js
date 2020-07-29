const palindromes = function(string) {
    processedString = string
    .toLowerCase() // All elemets to lowercase
    .replace(/[^A-Za-z]/g, ""); // Remove any special characters

    return processedString === processedString // Compare the original string with the Reversed String
    .split("") // Put each string character into an Array
    .reverse() // Reverse the Array
    .join(""); // Make the array an string again for comparison


}

module.exports = palindromes
