let hours = document.querySelector('.hours h1'),
    minutes = document.querySelector('.minutes h1'),
    seconds = document.querySelector('.seconds h1'),
    ampm = document.querySelector('.box-clock span');

let date = new Date()

function AmPm() {
    time()
    let atualDate = parseInt(hours.textContent + minutes.textContent + seconds.textContent)

    if(atualDate == 000000 || atualDate <= 115999){
        ampm.innerHTML = 'am'
    }
    else if(atualDate >= 120000 || atualDate <= 125999){
        ampm.innerHTML = 'pm'
    }
}
function padAdd(){
    if (hours.textContent.length == 1 ) {
        hours.textContent = '0' + hours.textContent 
    }
    if(minutes.textContent.length == 1){
        minutes.textContent = '0' + minutes.textContent
    }
    if(seconds.textContent.length == 1){
        seconds.textContent = '0' + seconds.textContent
    }
}

function time() {
    date = new Date()
    hours.innerHTML = date.getHours()
    minutes.innerHTML = date.getMinutes()
    seconds.innerHTML = date.getSeconds()
    padAdd()
}


setInterval(time,1000) // 1000 ms == 1s
setInterval(AmPm,59000) //59000 ms == 59min

