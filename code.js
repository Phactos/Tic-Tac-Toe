var player = 'X';

var player1 = [];
var player2 = [];
var winner = false;

var squares = document.getElementsByClassName('square');

var options = ['1','2','3','4','5','6','7','8','9'];

function chooseSquare(id){
    if (options.includes(id) && winner === false){

        selectChoice(id, "X")
        console.log(options); 
        checkWinner('X')

        if (options.length > 0 && winner === false){
            AIPlay(options);
            console.log(options);
            checkWinner('O')
        }


        
    }
 }

 function AIPlay(options){
    var AIchoice = options[Math.floor(Math.random()*options.length)];
    selectChoice(AIchoice,"O");

 }

 function selectChoice(choice, player){
    var square = document.getElementById(choice);
    square.innerHTML = player;
    square.style.color = 'black';
    options = options.filter(value => value !== choice);
    if (player === 'X'){
        player1.push(choice);
        console.log('Player 1 chose ' + choice);
        console.log(player1);
    }
    else{
        player2.push(choice);
        console.log('Player 2 chose ' + choice);
        console.log(player2);
    }
 }

 function checkWinner(player){
    conditionForWin(player, '1','2','3');
    if (winner === true){return}
    
    conditionForWin(player, '4','5','6');
    if (winner === true){return}
    
    conditionForWin(player, '7','8','9');
    if (winner === true){return}
    
    conditionForWin(player, '1','5','9');
    if (winner === true){return}
    
    conditionForWin(player, '3','5','7');
    if (winner === true){return}
    
    conditionForWin(player, '1','4','7');
    if (winner === true){return}
    
    conditionForWin(player, '2','5','8');
    if (winner === true){return}
    
    conditionForWin(player, '3','6','9');
    if (winner === true){return}
 }

 function conditionForWin(player, square1, square2, square3){
     
    var condition = [square1, square2, square3]
    if (player === 'X'){
        var condition = condition.every(value => player1.includes(value));
        if (condition === true){
            console.log('Vitória');
            document.getElementById(square1).style.backgroundColor = 'blue';
            document.getElementById(square2).style.backgroundColor = 'blue';
            document.getElementById(square3).style.backgroundColor = 'blue';
            winner = true;
            return
        }
    }
    if (player === 'O'){
        var condition = condition.every(value => player2.includes(value));
        if (condition === true){
            console.log('Derrota');
            document.getElementById(square1).style.backgroundColor = 'red';
            document.getElementById(square2).style.backgroundColor = 'red';
            document.getElementById(square3).style.backgroundColor = 'red';
            winner = true;
            return
        }
    }
 }

 function reset(){
     winner = false;
     player1 = [];
     player2 = [];
     options = ['1','2','3','4','5','6','7','8','9'];

     for (var i = 0; i < squares.length; i++){
         squares[i].style.backgroundColor = '#eee';
         squares[i].innerHTML = '-';
         squares[i].style.color = '#eee';
     }
 }