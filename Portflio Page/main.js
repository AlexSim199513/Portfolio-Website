function openCalc() {
    document.getElementById('calculator').style.display = "block";
    document.getElementById('calc').innerHTML ='Calculator'
    document.getElementById('calc').removeEventListener('click', openCalc);
    document.getElementById('calc').addEventListener('click', closeCalc)
}

const  closeCalc = () => {
    document.getElementById('calculator').style.display = "none";
    document.getElementById('calc').removeEventListener('click', closeCalc);
    document.getElementById('calc').addEventListener('click', openCalc)
}

const openTimer = () => {
    document.getElementById('timer').style.display = 'block';
    document.getElementById('timerHeading').removeEventListener('click', openTimer);
    document.getElementById('timerHeading').addEventListener('click', closeTimer)
}

const  closeTimer = () => {
    document.getElementById('timer').style.display = "none";
    document.getElementById('timerHeading').removeEventListener('click', closeTimer);
    document.getElementById('timerHeading').addEventListener('click', openTimer)
}

const openBatrep = () => {
    document.getElementById('batrep').style.display = 'block';
    document.getElementById('batrepHeading').removeEventListener('click', openBatrep);
    document.getElementById('batrepHeading').addEventListener('click', closeBatrep)
}

const  closeBatrep = () => {
    document.getElementById('batrep').style.display = "none";
    document.getElementById('batrepHeading').removeEventListener('click', closeBatrep);
    document.getElementById('batrepHeading').addEventListener('click', openBatrep)
}

window.onload = function() {
document.getElementById('calc').addEventListener('click', openCalc)
document.getElementById('timerHeading').addEventListener('click', openTimer)
document.getElementById('batrepHeading').addEventListener('click', openBatrep)
}

