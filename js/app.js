const start = document.querySelector('.btn__reset');
const over = document.getElementById('overlay');
const first = document.getElementById('first');
const caller = document.getElementById('caller');
const tries = document.querySelectorAll('.tries');
const fail = document.querySelector('.fail');
const success = document.querySelector('.success');

let chance = tries.length -1;
console.log(chance);

const arrays = ["strength", "discipline", "focus", "growth", "consistency", "patience", "resilience", "success", "progress"];
const selectedWord = arrays[Math.floor(Math.random() * arrays.length)];
console.log(selectedWord);
const correctedLetter = [];
const wrongLetter = [];

start.addEventListener('click', function(){
    over.style.display='none';
});


first.addEventListener('click', function(){
let li = document.createElement('li');
li.textContent='q';
caller.appendChild(li)
});

function storeWrongWord(letter){
    wrongLetter.push(letter);
    console.log("wrong tries: "+wrongLetter);
    if(wrongLetter.length < 5){
        tries[chance].style.display='none';
        chance--;
        console.log(tries[chance]);
    }else{
        console.log("you have finished your chance !");
        over.style.display='flex';
        fail.innerText="you have lost!";
        over.style.background="pink";
    }
}

function displayWord(){
   const  arraySelectedWord = selectedWord.split('');
   const test  =  arraySelectedWord.map(function(abel){
       if(correctedLetter.includes(abel)){
          return `<li>${abel}</li>`;
       }else {
          return `<li></li>`;
       }
   });


   caller.innerHTML = test.join('');
   const newText = caller.innerText;
   console.log(newText);
   if(newText === selectedWord){
    over.style.display='flex';
    success.innerText="your are a winner!";
    over.style.background="green";
   }
}
displayWord();


document.querySelectorAll('button').forEach(function(btn){
    btn.addEventListener('click', function(e){
        let letter = e.target;
        let letterValue = letter.innerText;
        const  arraySelectedWord = selectedWord.split('');
        if(arraySelectedWord.includes(letterValue)){
            if(!correctedLetter.includes(letterValue)){
                correctedLetter.push(letterValue);
                displayWord();
                // console.log("coorect letter "+correctedLetter);
            }
        }else{
                storeWrongWord(letterValue);
            }
    })
});