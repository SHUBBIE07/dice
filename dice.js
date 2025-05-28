let diceScore = JSON.parse(localStorage.getItem('diceScore')) || {player1: 0, player2: 0, draw: 0};

let result = document.querySelector('.result');
let winner = document.querySelector('.winner');
result.innerHTML = `Score: P1 - ${diceScore.player1} | P2 - ${diceScore.player2}`;



function playGame() {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  let img1 = document.querySelector('.img1');
  let img2 = document.querySelector('.img2');
  let rollSound = document.querySelector('.rollSound');

  rollSound.currentTime = 2;
  rollSound.play()

  // Add rolling animation
  img1.classList.add("roll");
  img2.classList.add("roll");


  setTimeout(()=>{
    img1.classList.remove("roll");
    img2.classList.remove("roll");

    img1.setAttribute("src", `images/dice${randomNumber1}.png`);
    img2.setAttribute("src", `images/dice${randomNumber2}.png`);
  
    if (randomNumber1 > randomNumber2) {
      winner.innerHTML = 'Player 1 Wins!';
      diceScore.player1 += 1
    } else if (randomNumber2 > randomNumber1) {
      winner.innerHTML = 'Player 2 Wins!';
      diceScore.player2 += 1
    } else {
      winner.innerHTML = 'Draw!';
    }

  result.innerHTML = `Score: P1 - ${diceScore.player1} | P2 - ${diceScore.player2}`;

  localStorage.setItem('diceScore', JSON.stringify(diceScore));

  },1000)

}


function resetGame() {
  diceScore.player1 = 0;
  diceScore.player2 = 0;
  winner.innerHTML = ' ';
  result.innerHTML = `Score: P1 - 0 | P2 - 0`;
  localStorage.removeItem('diceScore');

}