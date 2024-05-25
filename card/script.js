let newX = 0, newY = 0, startX = 0, startY = 0;

let container = document.querySelector(".container");

let cards = document.querySelectorAll(".card")
cards.forEach((card)=>{
    card.addEventListener("mouseover",mouseDown);
    console.log(card)

    function mouseDown(e){
        startX = e.clientX
        startY = e.clientY
    
        document.addEventListener('mousemove', mouseMove)
        document.addEventListener('mouseup', mouseUp)
    }
    
    function mouseMove(e){
        newX = startX - e.clientX 
        newY = startY - e.clientY 
      
        startX = e.clientX
        startY = e.clientY
    
        card.style.top = (card.offsetTop - newY) + 'px'
        card.style.left = (card.offsetLeft - newX) + 'px'
    }
    
    function mouseUp(e){
        document.removeEventListener('mousemove', mouseMove)
    }
})



