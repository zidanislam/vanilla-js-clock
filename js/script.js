const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hrHand = document.querySelector('.hr-hand');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secDegree = ((seconds/60)*360)+90;
    secHand.style.transform = `rotate(${secDegree}deg)`

    const minutes = now.getMinutes();
    const minDegree = ((minutes/60)*360)+90;
    minHand.style.transform = `rotate(${minDegree}deg)`

    const hours = now.getHours();
    const hrDegree = ((hours/12)*360)+90;
    hrHand.style.transform = `rotate(${hrDegree}deg)`


}

setInterval(setDate, 1000)