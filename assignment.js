// Conversion of Feet to Mile
function feetToMile(num) {
  var mile = num / 5280;
  var fixedMile = mile.toFixed(3);
  var final = parseFloat(fixedMile);
  return 'There are ' + final + ' Mile in ' + num + ' Feet'
}
var mileResult = feetToMile(5280); 
console.log(mileResult);

// Wood Calculator Function Work Below
function woodCalculator(chair, table, bed){
  var chairNeeded = chair * 1;
  var tableNeeded = table * 3;
  var bedNeeded = bed * 5;
  var totalWood = chairNeeded + tableNeeded + bedNeeded;
  return 'The needing of your Wood is : ' + totalWood + ' Cubic Feet' ;
}
var woodResult = woodCalculator(3, 5, 10);
console.log(woodResult);
//Wood Calculator Function done;


// Brick Calculator Function Work Below
function brickCalculator(floorNum) {
    let numberOfFeets = 0;
    if(floorNum <= 10) {
        numberOfFeets = 15;
    }
    if(floorNum > 10 && floorNum <= 20) {
        numberOfFeets = 12;
    }
    if(floorNum > 20) {
        numberOfFeets = 10;
    }
    let bricksNeeded = floorNum * numberOfFeets * 1000;
    return 'The Number of Bricks Needed : ' + bricksNeeded + ' bricks';
}
  console.log(brickCalculator(21));
//bricks Calculation done

// Tiny Friends Function Below
var friendsName = ['ali', 'aali', 'aaali', 'aaaali'];
function tinyFriend(names) {

    let tinyName = undefined;
  
    if (names.length > 0) {
      for (let i = 0; i < names.length; i++) {
        if (typeof names[i] === 'string' && (tinyName == undefined ||names[i].length < tinyName.length )) {
          tinyName = names[i];
        }
      }
    }
  
    return tinyName;
  }
  
  var output = tinyFriend(friendsName);
  console.log(output);
// TinyFrined Function work donw