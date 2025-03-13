let answers = document.querySelectorAll('p');
let buttons = document.querySelectorAll('.button-plus');
let questions = document.querySelectorAll('.always');

for(let i = 0; i < buttons.length; i++){
    questions[i].addEventListener('click', function(){
        answers[i].classList.toggle('answer-opened');
        buttons[i].classList.toggle('button-minus'); 
    })
}