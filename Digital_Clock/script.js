const clock = document.querySelector('#clock')
// const clockX = document.getElementById('clock')      //This is also correct
setInterval(()=>{
    let date = new Date()
    clock.innerHTML=date.toLocaleTimeString();
},1000)

