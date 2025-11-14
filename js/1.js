function calculateArea() {
    var a = parseFloat(document.getElementById('side1').value);
    var b = parseFloat(document.getElementById('side2').value);
    var c = parseFloat(document.getElementById('side3').value);

    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    document.getElementById('result').innerHTML = 'Please enter valid positive numbers for all sides.';
        return;
    }

    var s = (a + b + c) / 2;

    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    if (isNaN(area)) {
        document.getElementById('result').innerHTML = "The sides you entered do not form a valid triangle.";
    } else {
        document.getElementById('result').innerHTML = 'Area of Triangle: ' + area.toFixed(2) + ' square units';
    }
}

checkbtn = document.getElementById('btn')
checkbtn.addEventListener("click", calculateArea)