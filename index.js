const hamburg = document.getElementsByClassName('ham')[0]
const nav = document.getElementsByClassName('nav')[0]

hamburg.addEventListener('click', () =>{
nav.classList.toggle('active');
})