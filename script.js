let hours = document.querySelector('.hours h1'),
    minutes = document.querySelector('.minutes h1'),
    seconds = document.querySelector('.seconds h1');

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
    let date = new Date()
    
    
    hours.innerHTML = date.getHours()
    minutes.innerHTML = date.getMinutes()
    seconds.innerHTML = date.getSeconds()
    padAdd()
}


setInterval(time,1000)

