var result_array = ["DRAW", "YOU WIN!", "COMPUTER WINS!"];
var items = ["Paper", "Rock", "Lizard", "Spock", "Scissor"];
var keepChangeFunc;

function randomComputerChoice() {
    var rand_index = Math.floor(Math.random() * 5);
    document.getElementById("player2_img").src = items[rand_index] + ".png";
    return rand_index;
}

function judge(p1) {
    clearInterval(keepChangeFunc);
    var p2 = randomComputerChoice();
    var result;

    if (p1 == p2) {
        result = 0;
    } else {
        /* Return a non-negative modulus value of 5 */
        var diff = (p2 - p1 + 5) % 5;
        /*
         * If diff == 1, then Player1 wins.
         * If diff == 0, then Player2 wins.
         */
        result = (diff % 2 == 1) ? 1 : 2;
    }
    document.getElementById("play_button").disabled = false;

    return result_array[result];
}

function startRandChange() {
    keepChangeFunc = setInterval(function() {
        randomComputerChoice();
    }, 10);
    document.getElementById("play_button").disabled = true;
}

onload = function () {
    var img_elements = document.getElementsByClassName("player1_img");
    for (var i = 0; i < img_elements.length; i++) {
        img_elements[i].addEventListener("click", function() {
            var p1 = this.getAttribute("alt");
            document.getElementById("result").textContent = judge(p1);
        });
    }
}



