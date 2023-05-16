$(window).ready(function () {
  draw(80, ".pie-chart1", "#79a2f2");
  draw(20, ".pie-chart2", "#79a2f2");
  draw(10, ".pie-chart3", "#79a2f2");
  draw(10, ".pie-chart4", "#79a2f2");
});

function draw(max, classname, colorname) {
  var i = 1;
  var func1 = setInterval(function () {
    if (i < max) {
      color1(i, classname, colorname);
      i++;
    } else {
      clearInterval(func1);
    }
  }, 10);
}
function color1(i, classname, colorname) {
  $(classname).css({
    background:
      "conic-gradient(" +
      colorname +
      " 0% " +
      i +
      "%, #ffffff " +
      i +
      "% 100%)",
  });
}
