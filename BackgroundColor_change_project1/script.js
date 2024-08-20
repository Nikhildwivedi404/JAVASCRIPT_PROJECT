const button = document.querySelectorAll('.box')
const body = document.querySelector("body")

button.forEach(function(box){
    box.addEventListener('click', function(color){
        if(color.target.id === 'box1'){
            body.style.backgroundColor="#FFEBD4"
        }
        if(color.target.id === 'box2'){
            body.style.backgroundColor="#7C00FE"
        }
        if(color.target.id === 'box3'){
            body.style.backgroundColor="#4F1787"
        }
        if(color.target.id === 'box4'){
            body.style.backgroundColor="#EB3678"
        }
        if(color.target.id === 'box5'){
            body.style.backgroundColor="#F0A8D0"

        }
    })
})

