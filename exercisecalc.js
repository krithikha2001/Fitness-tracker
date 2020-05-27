
function myFunction() {
  var prev=document.getElementById("dem").value;

  var exs = document.getElementById("exercise").value;
  var integer = parseInt(exs);

var th = document.getElementById("timeh").value;
var tm = document.getElementById("timem").value;
var k =parseInt(tm) + ((parseInt(th))*60);
var result = (integer)*k/30;
result=Math.round(result*100)/100;
var total=parseInt(prev)+result;
  document.getElementById("demo").innerHTML = result+"kcal for this activity";
  document.getElementById("calories").innerHTML=total+"kcal in total for the day!";
  document.getElementById("dem").value=result;
  document.getElementById("cal").value=total;
}
function getSelectedOption(sel) {
  var opt;
  for( var i = 0, len = sel.options.length; i < len; i++ ) {
    opt = sel.options[i];
    if( opt.selected === true ) {
      break;
    }
  }
  return opt;
}
