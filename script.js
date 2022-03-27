let hours = document.querySelector('.hours h1'),
    minutes = document.querySelector('.minutes h1'),
    seconds = document.querySelector('.seconds h1'),
    toogleAmPm = document.querySelector('.box-clock span'),
    date = new Date();


const AmPm = () => {
    let atualDate = parseInt(hours.textContent + minutes.textContent + seconds.textContent)

    if (atualDate >= 120000 && atualDate <= 235958) toogleAmPm.innerHTML = 'Pm';
    else { toogleAmPm.innerHTML = 'Am' };
}


const time = setInterval(() => {
    date = new Date();
    hours.innerHTML = date.getHours();
    minutes.innerHTML = date.getMinutes();
    seconds.innerHTML = date.getSeconds();

    if (hours.textContent < 10) hours.textContent = '0' + hours.textContent;
    if (minutes.textContent < 10) minutes.textContent = '0' + minutes.textContent;
    if (seconds.textContent < 10) seconds.textContent = '0' + seconds.textContent;
    AmPm();

},1000)         // 1000 ms == 1s