setInterval(()=>{
    let hour=document.querySelector("#hour h2")
    let min=document.querySelector("#min h2")
    let sec=document.querySelector("#sec h2")
    // console.log(hour)
    // console.log(min)
    // console.log(sec)

    let hourVal= new Date().getHours()
    let minVal=new Date().getMinutes()
    let secVal=new Date().getSeconds()

    if(secVal < 10){
        sec.innerHTML=`0${secVal}`
    }else{
        sec.innerHTML=secVal
    }
    
    if(minVal < 10){
        min.innerHTML=`0${minVal}`
    }else{
        min.innerHTML=minVal
    }
    
    if(hourVal < 10){
        hour.innerHTML=`0${hourVal}`
    // }else if(hourVal>12){
    //     hour.innerHTML=`0${hourVal-12}`
    }
    else{
        hour.innerHTML=hourVal
    }

},1000)