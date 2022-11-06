var p1name = localStorage.getItem("player1");
var p2name = localStorage.getItem("player2");

var score1 = 0;
var score2 = 0;

document.getElementById("player1_name").innerHTML = p1name + ": ";
document.getElementById("player2_name").innerHTML = p2name + ": ";

document.getElementById("player1_score").innerHTML = score1 + ": ";
document.getElementById("player2_score").innerHTML = score2 + ": ";

document.getElementById("player_q").innerHTML = "Question Turn-" + p1name;
document.getElementById("player_a").innerHTML = "Answer Turn-" + p2name;

function send() {

    var qword = document.getElementById("word").value;
    var word = qword.toLowerCase();
    var charAt1 = word.charAt(1);
    var length_half = Math.floor(word.length/2);
    var charAt2 = word.charAt(length_half);
    var short = word.length-1;
    var charAt3 = word.charAt(short);

    var remove1 = word.replace(charAt1, "_");
    var remove2 = remove1.replace(charAt2, "_");
    var remove3 = remove2.replace(charAt3, "_");

    question = "<h4 id='q_word'> Question: "+remove3+"</h4>";
    input = "<br> Answer: <input type='text' id='a_word'>";
    check = "<br> <button class='btn btn-success' onclick='check()'>Check</button>";
    row = question + input + check;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}