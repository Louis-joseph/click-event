const btn = document.querySelector('#btn');                   //on selectionne id btn
const img = document.getElementById('img');                   //on selectionne id img

btn.addEventListener('click' , () => {                       //functions fléchée
    img.classList.toggle('look')                                //Quand on click sur btn la class look va être appellé
                                                             //toggle = si jamais

})