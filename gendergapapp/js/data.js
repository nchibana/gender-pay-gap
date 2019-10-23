$(document).ready(function() {

button = document.querySelector('.occupations-input');
datalist = document.querySelector('datalist');
select = document.querySelector('select');
job = document.querySelector('.occupation-display');
options = select.options;
button.addEventListener('click', toggle_ddl);
function toggle_ddl(){
    /* if DDL is hidden */
    if(datalist.style.display === ''){
        /* show DDL */
        datalist.style.display = 'block';
        // this.textContent="&#8250;";
        var val  = input.value;
        for(var i=0; i<options.length; i++) {
            if ( options[i].text === val ) {
                select.selectedIndex = i; break;
            }
        }
    }
    else hide_select();
}
function hide_select(){
    /* hide DDL */
    datalist.style.display = '';
    // button.textContent="&#8250;";
}
/* when the user wants to type into text field, hide DDL */
input = document.querySelector('input');
input.addEventListener('focus', toggle_ddl);
/* when user selects an option from DDL, write it to text field */
select.addEventListener('change', fill_input);
function fill_input(){
    input.value = options[this.selectedIndex].value;
    hide_select();
}

$(window).on("load", function() {
    $('.salaryPay').addClass('salaryPayFocus');

});

$('.salaryPay, input, select, datalist, .salaryPayFocus, .hourlyWage').click(function() {
        $('.salaryPay').removeClass('salaryPayFocus');

});

var xcoor = $('.underline')[0].getBoundingClientRect().left;
var ycoor = $('.underline')[0].getBoundingClientRect().top;
var height = $( document ).height();
var width = $( document ).width();
var transy = -(height-ycoor-190);
var transx = 0;

$('#clock-visual').css({
  '-webkit-transform' : 'translateY(' + transy + 'px)',
  '-moz-transform'    : 'translateY(' + transy + 'px)',
  '-ms-transform'     : 'translateY(' + transy + 'px)',
  '-o-transform'      : 'translateY(' + transy + 'px)',
  'transform'         : 'translateY(' + transy + 'px)',
  //  '-webkit-transform' : 'translateX(' + transx + 'px)',
  // '-moz-transform'    : 'translateX(' + transx + 'px)',
  // '-ms-transform'     : 'translateX(' + transx + 'px)',
  // '-o-transform'      : 'translateX(' + transx + 'px)',
  // 'transform'         : 'translateX(' + transx + 'px)'
});

var xcoordinate = $('#rect5')[0].getBoundingClientRect().right;
var move = xcoordinate-125;
var moving = -65;

$('#clock-visual svg').css({
  '-webkit-transform' : 'translate(' + move + 'px, ' + moving + 'px)',
  '-moz-transform'    : 'translate(' + move + 'px, ' + moving + 'px)',
  '-ms-transform'     : 'translate(' + move + 'px, ' + moving + 'px)',
  '-o-transform'      : 'translate(' + move + 'px, ' + moving + 'px)',
  'transform'         : 'translate(' + move + 'px, ' + moving + 'px)',
  // '-webkit-transform' : 'translateY(' + moving + 'px)',
  // '-moz-transform'    : 'translateY(' + moving + 'px)',
  // '-ms-transform'     : 'translateY(' + moving + 'px)',
  // '-o-transform'      : 'translateY(' + moving + 'px)',
  // 'transform'         : 'translateY(' + moving + 'px)',
});

var xcoord = $('#clock-visual svg')[0].getBoundingClientRect().left;
var ycoord = $('#clock-visual svg')[0].getBoundingClientRect().top;
var transclock = -(height-ycoord);
var transwatch = xcoord-xcoor+65;

console.log(xcoord);

$('#clock-visual img').css({
  '-webkit-transform' : 'translateY(' + transclock + 'px)',
  '-moz-transform'    : 'translateY(' + transclock + 'px)',
  '-ms-transform'     : 'translateY(' + transclock + 'px)',
  '-o-transform'      : 'translateY(' + transclock + 'px)',
  'transform'         : 'translateY(' + transclock + 'px)',
  '-webkit-transform' : 'translateX(' + transwatch + 'px)',
  '-moz-transform'    : 'translateX(' + transwatch + 'px)',
  '-ms-transform'     : 'translateX(' + transwatch + 'px)',
  '-o-transform'      : 'translateX(' + transwatch + 'px)',
  'transform'         : 'translateX(' + transwatch + 'px)'
});


//////



       

// show big dog image and name under 

//replace dog breed, names and fun fact with new text

        
        


// change color of circle in accordance with type of dog


        // if($("#individualNames,.dogBreed,.photoLarge,.funFactText").hasClass('FadeIn')){
        //    $('#individualNames,.dogBreed,.photoLarge,.funFactText').removeClass('FadeIn').addClass('FadeOut');
        // }else{
        //   $('#individualNames,.dogBreed,.photoLarge,.funFactText').removeClass('FadeOut').addClass('FadeIn');
        // }

        // if(dogName == "Beagle" || dogName == "Bichon" || dogName == "Chihuahua" || dogName == "Corgi" || dogName == "Dachshund" || dogName == "Havanese" || dogName == "Shiba Inu" || dogName == "Maltese" || dogName == "Pomeranian" || dogName == "Poodle" || dogName == "Pug" || dogName == "Terrier" || dogName == "Tzu"){
        // $('.dogNames').removeClass('green purple orange').addClass('green'), 1000;    
        // }

        // if(dogName == "Boxer" || dogName == "Bulldog" || dogName == "Collie" || dogName == "Hound" || dogName == "Husky" || dogName == "Pinscher" || dogName == "Pit" || dogName == "Schnauzer" || dogName == "Spaniel"){
        //     $('.dogNames').removeClass('green purple orange').addClass('purple'), 1000;   
        // }

        // if(dogName == "Golden" || dogName == "Labrador" || dogName == "Retriever" || dogName == "Rottweiler" || dogName == "Shepherd"){
        //     $('.dogNames').removeClass('green purple orange').addClass('orange'), 1000;   
        // }






//////


var men = document.getElementById('men')
  , women = document.getElementById('women')
  , α = 0
  , π = Math.PI
  , t = 10;

$('input').change(function draw() {
  α++;
   var selected = $('.occupation-display').text();
  var thisProfession = professions[selected];
        var pievalue = thisProfession.married_men;
  α %= pievalue*30;
  var r = ( α * π / 180 )
    , x = Math.sin( r ) * 125
    , y = Math.cos( r ) * - 125
    , mid = ( α > 180 ) ? 1 : 0
    , anim = 'M 0 0 v -125 A 125 125 1 ' 
           + mid + ' 1 ' 
           +  x  + ' ' 
           +  y  + ' z';
  //[x,y].forEach(function( d ){
  //  d = Math.round( d * 1e3 ) / 1e3;
  //});
 
  men.setAttribute( 'd', anim );
  women.setAttribute( 'd', anim );
  
  setTimeout(draw, t); // Redraw

})();



// var $win = $(window);
// var $lay = $('html');
// var baseSize = {
//     w: 1920,
//     h: 1080   
// }

// function updateScale() {

//     var ww = $win.width();
//     var wh = $win.height();
//     var newScale = 1;

//     // compare ratios
//     if(ww/wh < baseSize.w/baseSize.h) { // tall ratio
//         newScale = ww / baseSize.w;
//     } else { // wide ratio
//         newScale = wh / baseSize.h;        
//     }

//     $lay.css('transform', 'scale(' + newScale + ',' +  newScale + ')');

//     console.log(newScale);
// }

// $(window).resize(updateScale);

// var $el = $("html");
// var elHeight = $el.outerHeight();
// var elWidth = $el.outerWidth();

// var $wrapper = $("body");

// $wrapper.resizable({
//   resize: doResize
// });

// function doResize(event, ui) {
  
//   var scale, origin;
    
//   scale = Math.min(
//     ui.size.width / elWidth,    
//     ui.size.height / elHeight
//   );
  
//   $el.css({
//     transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
//   });
  
// }

// var starterData = { 
//   size: {
//     width: $wrapper.width(),
//     height: $wrapper.height()
//   }
// }
// doResize(null, starterData);



});