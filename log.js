$(document).ready(function(){
$(".niceCheck").click(
function() {
     changeCheck(jQuery(this));
});
jQuery(".niceCheck").each(
/* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
function() {
     changeCheckStart(jQuery(this));
});
});
function changeCheck(el)
{
     var el = el,
          input = el.find("input").eq(0);
     if(!input.attr("checked")) {
        el.css("background-position","0 12px ");    
        input.attr("checked", true)
    } else {
        el.css("background-position","0 0");    
        input.attr("checked", false)
    }
     return true;
}
function changeCheckStart(el){
var el = el,
        input = el.find("input").eq(0);
      if(input.attr("checked")) {
        el.css("background-position","0 -15px");    
        }
     return true;
}