   setInterval(randomRgb, 700);

        function randomRgb() {
            // create the rgb string
            var col =  "rgb("
            + randomColor(255) + ","
            + randomColor(255) + ","
            + randomColor(255) + ")";

            //change the text color with the new random color
            document.getElementById("divone").style.color = col;
        }


        function randomColor(num) {          
            return Math.floor(Math.random() * num);
        }   