$( document ).ready(function() {
    var player1 = localStorage.getItem("player1_name");
    document.getElementById("player1_name").innerHTML = player1;
    var player2 = localStorage.getItem("player2_name");
    document.getElementById("player2_name").innerHTML = player2;

    var questionText= localStorage.getItem("question");
    document.getElementById("quiz").innerHTML = questionText;
    
});
function send()
{
    var num1= document.getElementById("number1").value;
    var num2 =document.getElementById("number2").value;
    var ques= num1+'X'+num2;
    localStorage.setItem("question", ques);
}