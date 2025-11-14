function checkPrediction() {
    let probability = Math.floor(Math.random() * 100) + 1;
    const resultelement = document.getElementById('result')
    resultelement.textContent = `Prawdopodobienstwo, że tak będzie wynosi: ${probability}%`; 
    if (probability <= 33) {
        resultelement.className = "result low";
    } else if (probability <= 66) {
        resultelement.className = "result medium"
    } else {
        resultelement.className = "result high"
    }

}

checkbtn = document.getElementById('btn')
checkbtn.addEventListener("click", checkPrediction)