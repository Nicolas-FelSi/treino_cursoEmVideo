const numberid = document.getElementById('numberid')
const countid = document.getElementById('count')
const resultid = document.getElementById('result')

countid.addEventListener('click', countClick)

function countClick() {
    if (numberid.value.length == 0) {
        alert('Impossível tabuada do nada. Adicione um número.')
    } else {
        resultid.innerText = `Tabuada do ${numberid.value}: `
        resultid.style.textAlign = 'left'
        resultid.innerText += '\n' 
        for (let count = 0; count <= 10; count++) {
            let mult = Number(numberid.value) * count       
            resultid.innerText += `${numberid.value} x ${count} = ${mult}\n`
        }
    }   
}