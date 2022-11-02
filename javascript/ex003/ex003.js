const question = parseInt(prompt('Que horas são agora? '))
const msgHour = document.getElementById('msgHour')
const imgHour = document.querySelector('img#imgHour')

msgHour.innerText = `Agora são ${question} hora(s) `
if (question < 12 && question > 5) {
    msgHour.innerText += '. Bom Dia'
    imgHour.src = './images/manhã.png'
    document.body.style.backgroundColor = '#f2c34d'
} else if (question >= 12 && question < 18 ) {
    msgHour.innerText += '. Boa Tarde'
    imgHour.src = './images/tarde.png'
    document.body.style.backgroundColor = '#8b9fe5'
} else if (question > 17 && question < 24) {
    msgHour.innerText += '. Boa Noite'
    imgHour.src = './images/noite.png'
    document.body.style.backgroundColor = '#6e48bf'
} else if (question > 0 && question < 6){
    msgHour.innerText += '. Boa Madrugada'
    imgHour.src = './images/noite.png'
    document.body.style.backgroundColor = '#6e48bf'
} else {
    msgHour.innerText = 'Hora inválida'
}