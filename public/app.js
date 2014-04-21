jQuery(document).ready(function(){

function randomColor(){
 r = Math.floor(Math.random() * (256));
 g = Math.floor(Math.random() * (256));
 b = Math.floor(Math.random() * (256));
 jQuery('body').css('background-color','rgb('+r+','+g+','+b+')');

};

        }   