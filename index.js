var drag = false;
var posX = 300, posY = 300;
var px = 0, py = 0;
var el = $('div');

var loop = setInterval(function(){
  var tamX = el.width()/2,
      tamY = el.height()/2;
    
  var x2 = Math.ceil(el.offset().left + tamX), 
      y2 = Math.ceil(el.offset().top + tamY);
  
  var deltaY = posY - y2;
  var deltaX = posX - x2;
  
  var tiltx = -(deltaY / y2),
      tilty = (deltaX / x2);
  
  var raio = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
  var degree = (raio * 40);
  if(Math.abs(degree) > 45) degree = 45;
  
  px += (posX - px-tamX) / 22;
  py += (posY - py-tamY) / 22;
 
    el.css({
      '-webkit-transform':'rotate3d('+tiltx+', '+tilty+', 0, '+degree+'deg)',
      left: px+'px',
      top: py+'px'
    });
},10);

$(document).on('mousemove', function( event ) {
  if(drag)
  {
    posX = event.pageX;
    posY = event.pageY;
  }
})
.on('mouseup', function(){
  drag = false;
});

el.on('mousedown', function(){
  drag = true;
});
