const repeatString = function(string, number) {
    let resultado = ''
    if (number < 0) {
        resultado = 'ERROR'
    }
    else {

        for (let i = 0; i < number; i++) {
        resultado += string 
        }
    }
return resultado
    
}

module.exports = repeatString
