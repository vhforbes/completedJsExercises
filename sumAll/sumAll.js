const sumAll = function(min, max) {

    let sum = 0

    if (min < 0 || max < 0) return "ERROR";

    if (typeof min !== "number" || typeof max !== "number") return "ERROR";

    if (min > max) {
        
        const temp = min
        min = max
        max = temp

    }

    let i = min

    for (i; i <= max; i++) {

    sum += i

    }

    return sum

}

 





module.exports = sumAll
