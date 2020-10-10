const choises = document.querySelectorAll('.choise');
const modal = document.querySelector('.modal');
const result = document.getElementById('result');
const score= document.getElementById('score');
const restartBtn= document.getElementById('restart');
let scoreBoard={
    palyer:0,
    computer:0,
};

function startGame(e){
    restartBtn.style.display='inline-block';
  const player=e.target.id;
  const computerChoises=getComputerChoise();
  const winner = getWinner(player,computerChoises);
  console.log(computerChoises,player,winner);
  showWinner(winner,computerChoises);
}

//irating through each choises
for(let choise of choises){
    choise.addEventListener('click',startGame);
}

//get the computer choises randomly
function getComputerChoise(){
    let radom = Math.random();
    if(radom<0.34){
        return 'rock';
    }
  else if(radom<=0.67){
        return 'paper';
  }
  else{
  return 'scissors';
  }
}

//geting winner 

function getWinner(player,comp){
    if(player===comp){
       return 'draw'
    }
    else if(comp=='rock'){
        if(player=='paper'){
            return 'player'
        }
        else{
            return 'computer'
        }
    }
    else if(comp=='paper'){
        if(player=='scissors'){
            return 'player';
        }
        else{
            return 'computer'
        }
    }
    else if(comp=='scissors'){
        if(player=='rock'){
            return 'player'
        }
        else{
            return 'computer'
        }
    }
}

function showWinner(winner,compChoice){
   if(winner=='player'){
      scoreBoard.palyer++;
      result.innerHTML=`<i class="fas fa-times" id="cross"></i><h1 class='win' style="color:green">You win</h1>
        <img src="${compChoice}.png">
        <p>Computer Chose ${compChoice}</p>`;
   }
   else if(winner=='computer'){
       scoreBoard.computer++;
       result.innerHTML=`<i class="fas fa-times" id="cross"></i><h1 class='win' style="color:red">You Lose!</h1>
       <img src="${compChoice}.png">
       <p>Computer Chose ${compChoice}</p>`
   }
   else{
    result.innerHTML=`<i class="fas fa-times" id="cross"></i><h1 class='win'>Draw</h1>
    <img src="${compChoice}.png">
    <p>Computer Chose ${compChoice}</p>`
   }
   score.innerHTML=`<p>You: ${scoreBoard.palyer}</p>
   <p>Computer:${scoreBoard.computer}</p>`
   modal.style.display='block'
}


window.addEventListener('click',(e)=>{
    if(e.target==modal){
        modal.style.display='none';
    }
 
    const cross=document.getElementById('cross');
    cross.addEventListener('click',()=>{
        modal.style.display='none';
        
    })   
});

restartBtn.addEventListener('click',()=>{
   scoreBoard.computer=0;
   scoreBoard.palyer=0;
   score.innerHTML=`<p>Player:0</p>
   <p>Computer:0</p>`;
   restartBtn.style.display='none';
});

