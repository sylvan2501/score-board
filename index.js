let homeAddOneBtn = document.querySelector('#home-score-add-one');
let homeAddTwoBtn = document.querySelector('#home-score-add-two');
let homeAddThreeBtn = document.querySelector('#home-score-add-three');

let guestAddOneBtn = document.querySelector('#guest-score-add-one');
let guestAddTwoBtn = document.querySelector('#guest-score-add-two');
let guestAddThreeBtn = document.querySelector('#guest-score-add-three');
let hScore = 0;
let gScore = 0;
let homeScore = document.querySelector('.home-score');
let guestScore = document.querySelector('.guest-score');
let homeResetBtn = document.querySelector('#home-reset');
let guestResetBtn = document.querySelector('#guest-reset');
homeScore.textContent = hScore;
guestScore.textContent = gScore;
homeAddOneBtn.addEventListener('click', (event)=>{
  hScore+=1;
  homeScore.textContent = hScore.toString();
});
homeAddTwoBtn.addEventListener('click', (event)=>{
  hScore+=2;
  homeScore.textContent = hScore.toString();
});
homeAddThreeBtn.addEventListener('click', (event)=>{
  hScore+=3;
  homeScore.textContent = hScore.toString();
});
homeResetBtn.addEventListener('click',(event) =>{
  hScore=0;
  homeScore.textContent = hScore.toString();
});
guestAddOneBtn.addEventListener('click', (event)=>{
  gScore+=1;
  guestScore.textContent = gScore.toString();
});
guestAddTwoBtn.addEventListener('click', (event)=>{
  gScore+=2;
  guestScore.textContent = gScore.toString();
});
guestAddThreeBtn.addEventListener('click', (event)=>{
  gScore+=3;
  guestScore.textContent = gScore.toString();
});
guestResetBtn.addEventListener('click',(event) =>{
  gScore=0;
  guestScore.textContent = gScore.toString();
});