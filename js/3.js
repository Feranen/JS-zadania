function replace() {
    let word1 = document.getElementById('first').value
    let word2 = document.getElementById('second').value

    if (word1.length > 0 && word2.length > 0) {
        const newword1 = word2.charAt(0) + word1.slice(1);
        const newword2 = word1.charAt(0) + word2.slice(1);
        document.getElementById('result').innerText = `Wynik: ${newword1} ${newword2}`
    }   else {
        document.getElementById('result').innerText = `Podaj oba słowa`
    }

}

checkbtn = document.getElementById('btn')
checkbtn.addEventListener("click", replace)