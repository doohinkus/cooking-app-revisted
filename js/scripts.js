var gallonToLiter = function(gallon) {
  return gallon * 3.785411784;
};

var literToGallon = function(liter) {
  return liter / 3.785411784;
};

var cupToLiter = function(cup) {
  return cup * 0.2365882365;
};

var literToCup = function(liter2) {
  return liter2 / 0.2365882365;
};

var ozToMl = function(oz) {
  return oz * 29.5735296;
};

var mlToOz = function(ml) {
  return ml / 29.5735296;
};

$(document).ready(function(){
  var calculate = function (complete){
    var userInput = parseInt($(".input-group input").val());
    var answer = complete(userInput);
    $("h1#answer").text(answer);
  }
// calculate (mlToOz);
  $("#gallons").click(function(){
    calculate (gallonToLiter);
  });
  $("#liters").click(function(){
    calculate (literToGallon);
  });
  $("#cups2liters").click(function(){
    calculate (cupToLiter);
  });
  $("#liters2cups").click(function(){
    calculate (literToCup);
  });
  $("#ounces").click(function(){
    calculate (ozToMl);
  });
  $("#milliliters").click(function(){
    calculate (mlToOz);
  });
});
