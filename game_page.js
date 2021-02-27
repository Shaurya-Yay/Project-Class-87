$(document).ready(function() {
    turn_flag = 1;
    question_turn = null;
    answer_turn = null;
    turn_status = null;
    result_section = null;
    player1 = localStorage.getItem("player1_name");
    document.getElementById("player1_name").innerHTML = player1;
    var player2 = localStorage.getItem("player2_name");
    document.getElementById("player2_name").innerHTML = player2;

    var output = localStorage.getItem("output");
    document.getElementById("output").innerHTML = output;
    turn_status = `<div><label>Question Turn: </label><span>` + question_turn + `</span></div>
    <br> 
    <div><label>Answer Turn: </label><span>` + answer_turn + `</span></div>`;

    document.getElementById("turn_status").innerHTML = turn_status;
    answer_turn = player1;
    question_turn = player2;

});

function send() {

    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    actual_answer = parseInt(num1) * parseInt(num2);

    console.log('tf' + turn_flag);


    if (turn_flag % 2 == 0) {
        temp = answer_turn;
        answer_turn = question_turn;
        question_turn = temp;

    } else {
        temp = question_turn;
        question_turn = answer_turn;
        question_turn = temp;
    }
    turn_flag++;

    question_number = "<h4>" + num1 + 'X' + num2 + "<h4>";

    turn_status = `<div><label>Question Turn: </label><span>` + question_turn + `</span></div>
    <br> 
    <div><label>Answer Turn: </label><span>` + answer_turn + `</span></div>`;

    input_box = `<div> Answer: </div> <div class="form-group">
                                         <input id="input_check_box" class="form-control">
                                        </div>`;
    check_buttton = `<button type="submit" class="btn btn-success" onclick="check()">Check</button>`;

    result_section = question_number + input_box + check_buttton;


    localStorage.setItem("output", result_section);
    localStorage.setItem("turn", turn_flag);
    document.getElementById("output").innerHTML = result_section;



}