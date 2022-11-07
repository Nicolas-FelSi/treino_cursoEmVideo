const startid = document.getElementById('startid')
const endid = document.getElementById('endid')
const stepid = document.getElementById('stepid')
const countid = document.getElementById('count')
const resultid = document.getElementById('result')

countid.addEventListener('click', countCheck)

function countCheck() {
    if (startid.value.length == 0 || endid.value.length == 0 || stepid.value.length == 0) {
        resultid.innerHTML = '[ERRO], Falta de dados. Tente novamente.'
        resultid.style.color = 'red'
        resultid.style.backgroundColor = '#ffa5a5'
        resultid.style.padding = '20px'     
    } else {
        resultid.innerText = 'Contando: \n'
        const start = Number(startid.value)
        const end = Number(endid.value)
        const step = Number(stepid.value)
        if (start < end) {
            // contagem crescente
           for (let count = start; count <= end; count += step ) {
            resultid.innerText += `${count} 👉 `              
           }
        } else {
            // contagem decrescente
           for (let count = end; count >= start; count -= step) {
            resultid.innerText += `${count} 👉`
            console.log(count);
           } 
        }       
        resultid.style.overflow = 'auto'
        resultid.style.height = '200px'    
        resultid.style.marginTop = '7px'
        resultid.style.padding = '10px'
        resultid.style.backgroundColor = '#e2e2e2'
        resultid.innerText += `🏁`
    }
    resultid.style.marginTop = '7px'
}