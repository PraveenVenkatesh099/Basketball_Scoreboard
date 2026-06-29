let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

let homeScore = 0
let guestScore = 0

let homeBtn1 = document.getElementById("home-btn-1")
let homeBtn2 = document.getElementById("home-btn-2")
let homeBtn3 = document.getElementById("home-btn-3")

let guestBtn1 = document.getElementById("guest-btn-1")
let guestBtn2 = document.getElementById("guest-btn-2")
let guestBtn3 = document.getElementById("guest-btn-3")

function homeAdd1(){
    homeScore+=1
    homeEl.textContent= homeScore
}

function homeAdd2(){
    homeScore+=2
    homeEl.textContent= homeScore
}

function homeAdd3(){
    homeScore+=3
    homeEl.textContent= homeScore
}

function guestAdd1(){
    guestScore+=1
    guestEl.textContent= guestScore
}

function guestAdd2(){
    guestScore+=2
    guestEl.textContent= guestScore
}

function guestAdd3(){
    guestScore+=3
    guestEl.textContent= guestScore
}

function allClear(){
    homeScore = 0
    guestScore = 0
    homeEl.textContent = 0
    guestEl.textContent = 0
}