const inputs =document.querySelectorAll(`input`)
const res =document.querySelector(`#res`)
const arr =[`scissors`,`rock`,`paper`]
inputs.forEach((input)=>{
    input.addEventListener(`click`,(e)=>{
        const random = Math.floor(Math.random()*2)
       if(e.target.value === `scissors`&& random ===2){
           res.innerHTML=`
           <h2>you von!</h2> 
           <img src="./assets/bumaga.jpeg" alt="">  
           `
       }else if(e.target.value ===`rock`&& random ===0){
           res.innerHTML=`
           <h2>you von!</h2> 
           <img src="./assets/nojnica.png" alt="">   
           `
       }else if(e.target.value===`paper`&& random===1){
           res.innerHTML=`
            <h2>you von!</h2> 
           <img src="./assets/kamen.png" alt="">  
           `
       }else if (e.target.value ===`scissors`&& random ===0){
           res.innerHTML=`
           <h2>draw</h2>
           `
       }else if(e.target.value ===`paper`&& random ===2 ){
           res.innerHTML=`
           <h2>draw</h2>
           <img src="./assets/bumaga.jpeg" alt="">
           `
       }else if(a.target.value === `rock`&& random ===1){
           res.innerHTML=`
           <h2>draw</h2>
           <img src="./assets/kamen.png" alt="">
           `
       }


    })
})
