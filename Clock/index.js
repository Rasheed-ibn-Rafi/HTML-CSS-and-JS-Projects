let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let seconds = document.getElementById('seconds')
let ampm = document.getElementById('ampm')

const updateClock = () => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap = "AM"

    if(h>12){
        h=h-12;
       ap ="PM"
    }

    h=h<10? "0"+h:h
    m=m<10? "0"+m:m
    s=s<10? "0"+s:s

    hour.innerHTML=h;
    minute.innerHTML=m
    seconds.innerHTML=s;
    ampm.innerHTML=ap
    setInterval(() => {
        updateClock();
    },1000)
}
updateClock();