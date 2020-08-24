// Conversion of Feet to Mile
function feetToMile(num) {
  var mile = num / 5280;
  var fixedMile = mile.toFixed(3);
  var final = parseFloat(fixedMile);
  return 'There are ' + final + ' Mile in ' + num + ' Feet'
}
var mileResult = feetToMile(5280); 
console.log(mileResult);
