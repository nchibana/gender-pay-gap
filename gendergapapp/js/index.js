$(document).ready(function() {
var counter = 0;

$(window).on("load", function() {
    $('.fade1').addClass('fadeInDown').addClass('fade01');
    $('.fade2').addClass('fadeInDown').addClass('fade02');
    $('.fade3').addClass('fadeInDown').addClass('fade03');
    $('.fade4').addClass('fadeInDown').addClass('fade04');
    $('.fade5').addClass('fadeInDown').addClass('fade05');
    $('#button1').addClass('FadeIn').addClass('fade06');
    $('#button2').addClass('FadeIn').addClass('fade07');
    $('#button3').addClass('FadeIn').addClass('fade08');
    $('#button4').addClass('FadeIn').addClass('fade09');
    $('#button5').addClass('FadeIn').addClass('fade10');
    $('#button6').addClass('FadeIn').addClass('fade11');
    $('#button7').addClass('FadeIn').addClass('fade12');
    $('#button8').addClass('FadeIn').addClass('fade13');
    $('#button9').addClass('FadeIn').addClass('fade14');
    $('#button10').addClass('FadeIn').addClass('fade15');
    $('#button11').addClass('FadeIn').addClass('fade16');
    $('#button12').addClass('FadeIn').addClass('fade17');
    $('#button13').addClass('FadeIn').addClass('fade18');
    $('#button14').addClass('FadeIn').addClass('fade19');
    $('#button15').addClass('FadeIn').addClass('fade20');
    $('#button16').addClass('FadeIn').addClass('fade21');
    $('#button17').addClass('FadeIn').addClass('fade22');
    $('#button18').addClass('FadeIn').addClass('fade23');
    $('#button19').addClass('FadeIn').addClass('fade24');
    $('#button20').addClass('FadeIn').addClass('fade25');
    $('#button21').addClass('FadeIn').addClass('fade26');
    $('#button22').addClass('FadeIn').addClass('fade27');
    $('#button23').addClass('FadeIn').addClass('fade28');
    $('#button24').addClass('FadeIn').addClass('fade29');
    $('#button25').addClass('FadeIn').addClass('fade30');
    $('#button26').addClass('FadeIn').addClass('fade31');
    $('#button27').addClass('FadeIn').addClass('fade32');
    $('.dogNames').addClass('FadeIn').addClass('fade33');
    $('.lines').addClass('FadeIn').addClass('fade34');
    $('.intro').addClass('FadeIn').addClass('fade35');
    $('.shadow').addClass('FadeIn').addClass('fade36');
    $('.instruction').addClass('FadeIn').addClass('fade37');

});

// listen for click on button

$('.topButtonsItem, .middleButtonsItem, .bottomButtonsItem').click(function() {
        $('.funFacts').addClass('FadeIn');
        $('.shadows,.introImage,.namesCircle,.taco').hide();
        var dogName = $(this).text();
        $('.dogBreed > p').html(dogName);

// show big dog image and name under 

//replace dog breed, names and fun fact with new text

        var thisDogData = dogData[dogName];
        $(".photoLarge").attr("src",thisDogData.images[0].img);
        

        var popNames = thisDogData.names;
          for(i=0; i<popNames.length; i++){
        $('.circleNames > li:nth-of-type('+(i+1)+')').text(popNames[i]);
        }

        var fact = thisDogData.funFact;
        $(".funFactText").text(fact[0]);


// change color of circle in accordance with type of dog


        if($("#individualNames,.dogBreed,.photoLarge,.funFactText").hasClass('FadeIn')){
           $('#individualNames,.dogBreed,.photoLarge,.funFactText').removeClass('FadeIn').addClass('FadeOut');
        }else{
          $('#individualNames,.dogBreed,.photoLarge,.funFactText').removeClass('FadeOut').addClass('FadeIn');
        }

        if(dogName == "Beagle" || dogName == "Bichon" || dogName == "Chihuahua" || dogName == "Corgi" || dogName == "Dachshund" || dogName == "Havanese" || dogName == "Shiba Inu" || dogName == "Maltese" || dogName == "Pomeranian" || dogName == "Poodle" || dogName == "Pug" || dogName == "Terrier" || dogName == "Tzu"){
        $('.dogNames').removeClass('green purple orange').addClass('green'), 1000;    
        }

        if(dogName == "Boxer" || dogName == "Bulldog" || dogName == "Collie" || dogName == "Hound" || dogName == "Husky" || dogName == "Pinscher" || dogName == "Pit" || dogName == "Schnauzer" || dogName == "Spaniel"){
            $('.dogNames').removeClass('green purple orange').addClass('purple'), 1000;   
        }

        if(dogName == "Golden" || dogName == "Labrador" || dogName == "Retriever" || dogName == "Rottweiler" || dogName == "Shepherd"){
            $('.dogNames').removeClass('green purple orange').addClass('orange'), 1000;   
        }

// show names and animate them

    var type = 1, //circle type - 1 whole, 0.5 half, 0.25 quarter
    radius = '7em', //distance from center
    start = -90*(counter +=10),//shift start from 0
    $elements = $("ul > #individualNames"),
    numberOfElements = $elements.length, //adj for even distro of elements when not full circle
    slice = 360 * type / numberOfElements;
    $elements.each(function(i) {
    var $self = $(this),
        rotate = slice * i + start,
        rotateReverse = rotate * -1;

        $self.css({
        'transform': 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(' + rotateReverse + 'deg)'});
        
    });

});
    });



