$(document).ready(function() {
    var turn_flag = 0;
    var question_turn = null;
    var answer_turn = null;
    var player1 = localStorage.getItem("player1_name");
    document.getElementById("player1_name").innerHTML = player1;
    var player2 = localStorage.getItem("player2_name");
    document.getElementById("player2_name").innerHTML = player2;

    var output = localStorage.getItem("output");
    document.getElementById("output").innerHTML = output;

    answer_turn = player1;
    question_turn = player2;

    turn_status = `<div><label>Question Turn: </label><span>` + question_turn + `</span></div>
    <br> 
    <div><label>Answer Turn: </label><span>` + answer_turn + `</span></div>`;
    document.getElementById("turn_status").innerHTML = turn_status;


});

function send() {
    turn = 1;
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    actual_answer = parseInt(num1) * parseInt(num2);

    if (turn_flag % 2 == 0) {
        answer_turn = player1;
        question_turn = player2;

    } else {
        answer_turn = player2;
        question_turn = player1;
    }


    question_number = "<h4>" + num1 + 'X' + num2 + "<h4>";
    input_box = `<div> Answer: </div> <div class="form-group">
                                         <input id="input_check_box" class="form-control">
                                        </div>`;
    check_buttton = `<button type="submit" class="btn btn-success" onclick="check()">Check</button>`;

    result_section = question_number + input_box + check_buttton;

    document.getElementById("output").innerHTML = result_section;

    localStorage.setItem("output", result_section);


}

function check() {

    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == actual_answer) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }


    if (question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    } else {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }

    if (answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    } else {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }


    turn_flag++;
}