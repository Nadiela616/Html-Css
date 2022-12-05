const allButtons=document.querySelectorAll('button')
const h1=document.querySelector('.h1')
allButtons.forEach((button)=>{
    button.addEventListener('click',function(e){
    const numberOfButton= e.target.dataset.number
    h1.textContent= `Button number ${numberOfButton} was clicked`
    })
})