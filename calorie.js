function Exercise(){
var exs = document.getElementById("exercise");
var th = document.getElementById("timeh");
var tm = document.getElementById("timem");
var c = getSelectedOption(exs)
k =(number(tm)) + ((number(th))*60);
result = (number(c))*k/30;
document.getElementById("statement").innerHTML = "Total calories burned: "+ result;
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
