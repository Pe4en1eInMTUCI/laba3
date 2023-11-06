function testFunc() {
    if (document.getElementById('123').style.display === "none") {
        document.getElementById('123').style.display = "block"
    } else {
        document.getElementById('123').style.display = "none"
    }
}


function blurShow() {
    document.getElementById('blur').style.display = "block";
}

function blurHide() {
    document.getElementById('blur').style.display = "none";
}


function displayCard1() {
    blurShow();
    document.getElementById('card1').style.display = "block";
}

function hideCard1() {
    blurHide();
    document.getElementById('card1').style.display = "none";
}

function displayCard2() {
    blurShow();
    document.getElementById('card2').style.display = "block";
}

function hideCard2() {
    blurHide();
    document.getElementById('card2').style.display = "none";
}

function displayCard3() {
    blurShow();
    document.getElementById('card3').style.display = "block";
}

function hideCard3() {
    blurHide();
    document.getElementById('card3').style.display = "none";
}

function openGit1() {
    window.open('https://github.com/Pe4en1e', '_blank')
}

function openGit2() {
    window.open('https://github.com/Pe4en1e', '_blank')
}

function openGit3() {
    window.open('https://github.com/Pe4en1e', '_blank')
}