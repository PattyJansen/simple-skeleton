jQuery(document).ready(function(){

function randomColor(){
 r = Math.floor(Math.random() * (256));
 g = Math.floor(Math.random() * (256));
 b = Math.floor(Math.random() * (256));
 jQuery('body').css('background-color','rgb('+r+','+g+','+b+')');

};


 randomColor();
 var t = setInterval(randomColor,3000);
});

setInterval(randomRgb, 500);

        function randomRgb() {
            // create the rgb string
            var col =  "rgb("
            + randomColor(255) + ","
            + randomColor(255) + ","
            + randomColor(255) + ")";

            //change the text color with the new random color
            document.getElementById("random").style.color = col;
        }


        function randomColor(num) {          
            return Math.floor(Math.random() * num);
        }   