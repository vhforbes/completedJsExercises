const ftoc = function(temperature) {

  let celcius = 0

  celcius = (temperature - 32) * (5 / 9);

  celcius = Math.round(celcius * 10) / 10

  return celcius

}

const ctof = function(temperature) {

  let fahr = 0

  fahr = (temperature * (9/5)) + 32;
  
  fahr = Math.round(fahr * 10) / 10;

  return fahr


}

module.exports = {
  ftoc,
  ctof
}
