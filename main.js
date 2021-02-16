const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

const newYears = '1 jan 2022'

function countdown(){
    const newYearDate = new Date(newYears);
    const correntDate = new Date()

    const  totalSeconds = (newYearDate - correntDate) / 1000

    const days = Math.floor((totalSeconds / 3600 ) / 24)
    const hours = Math.floor((totalSeconds / 3600) % 24 )
    const min = Math.floor(totalSeconds / 60) % 60
    const second = Math.floor(totalSeconds) % 60
    

    console.log(days, hours, min, second)

    daysEl.innerHTML = days
    hoursEl.innerHTML = formatTime(hours)
    minsEl.innerHTML = formatTime(min)
    secondsEl.innerHTML = formatTime(second)
}

function formatTime(time){
    return time < 10 ? `0${time}` : time
}

setInterval(countdown, 1000)

countdown()