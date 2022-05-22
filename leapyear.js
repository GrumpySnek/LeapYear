

function leapYear (year) {
    if ((document.getElementById('year').value % 4 === 0) && (document.getElementById('year').value % 100 !== 0) || (document.getElementById('year').value % 4 === 0) && (document.getElementById('year').value % 400 === 0)) {
        document.getElementById('leapanswer').innerHTML = "Yes, " + document.getElementById('year').value + ' is a Leap Year!';
    } else {
        document.getElementById('leapanswer').innerHTML = "No, " + document.getElementById('year').value + ' is NOT a Leap Year.';
    }
}



document.getElementById('submitbutton').onclick = function() {
    leapYear (document.getElementById('year').value);
    console.log(document.getElementById('year').value);
}

