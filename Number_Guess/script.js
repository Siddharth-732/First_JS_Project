const random = Math.round(Math.random() * 100);
console.log(random);

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const guess_num = document.querySelector("#guessField").value;
  const prev_guess =document.querySelector(".guesses")
  const result=document.querySelector('.lowOrHi')
  let lives=document.querySelector('.lastResult')
  let prev=parseInt(lives.innerHTML)

  if (guess_num == random) {
    result.innerHTML= "Congrats ! You got it right"
  }
  else if(guess_num!=random && prev>0){
        lives.innerHTML=parseInt(prev)-1;
      result.innerHTML= "Opps ! Wrong guess try again";
  }

  prev_guess.innerHTML=guess_num

});
