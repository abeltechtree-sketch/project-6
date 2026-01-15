const start = document.querySelector('.btn__reset');
const over = document.getElementById('overlay');
const first = document.getElementById('first');
const caller = document.getElementById('caller');

const arrays = ["strength", "discipline", "focus", "growth", "consistency", "patience", "resilience", "success", "progress"];
const selectedWord = arrays[Math.floor(Math.random() * arrays.length)];
const correctedLetter = [];
const wrongLetter = [];

start.addEventListener('click', function(){
    over.style.display='none';
});


// first.addEventListener('click', function(){
// let li = document.createElement('li');
// li.textContent='q';
// caller.appendChild(li)
// });

function displayWord(){
    caller.innerHTML= `
    ${
        selectedWord
        .split("")
        .map(letter => `
            ${

            }
            `)
    }
    `

}
displayWord();


document.querySelectorAll('button').forEach(function(btn){
    btn.addEventListener('click', function(e){
        let letter = e.target;
        let li = document.createElement('li');
        li.textContent=letter.textContent;
        caller.appendChild(li);
    })

});