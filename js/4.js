function use() {
    var a = parseFloat(document.getElementById('side1').value);
    var b = parseFloat(document.getElementById('side2').value);
    var c = parseFloat(document.getElementById('side3').value);

    if ((isNaN(a)) || isNaN(b) || isNaN(c)){
            document.getElementById('result').innerText = `Enter three numbers`
            return
    }

    const min = Math.min(a, b, c);
    const max = Math.max(a, b, c);

    document.getElementById('result').innerText = `Min: ${min} Max: ${max}`
}

checkbtn = document.getElementById('btn')
checkbtn.addEventListener("click", use)