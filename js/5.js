function check(){
    let word = document.getElementById("side1").value
    const result = document.getElementById("result")
    if (word.length >= 6 && word.endsWith('kot')) {
        result.innerText = `Word has 6 characters and end with "kot"`
    } else{
        result.innerText = `Word hasn't 6 characters neither end with "kot"`
    }


}

checkbtn = document.getElementById('btn')
checkbtn.addEventListener("click", check)