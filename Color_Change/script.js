const buttons=document.querySelectorAll('.button')
console.log(buttons);

buttons.forEach(btn => {
    btn.addEventListener('click',(e)=>{
        // console.log(e)
        // console.log(e.target)
        const clicked=e.target.id;
        if(clicked=='grey') document.body.style.backgroundColor ='grey'
        if(clicked=='yellow') document.body.style.backgroundColor ='yellow'
        if(clicked=='blue') document.body.style.backgroundColor ='blue'
        if(clicked=='white') document.body.style.backgroundColor ='#fffcb7'
    })
})