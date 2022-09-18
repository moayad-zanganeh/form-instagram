let MobileNumberOrEmail = document.getElementById("MobileNumbeerOrEmail");
let fullName = document.getElementById("fullName");
let userName = document.getElementById("userName");
let password = document.getElementById("password");
let register = document.getElementById("register");
let firstText = document.getElementById("firstText");
let firstText1 = document.getElementById("firstText1");
let firstText2 = document.getElementById("firstText2");
let firstText3 = document.getElementById("firstText3");
let checkCircle = document.getElementById("checkCircle");
let checkCircle2 = document.getElementById("checkCircle2");
let checkCircle3 = document.getElementById("checkCircle3");
let checkCircle4 = document.getElementById("checkCircle4");
let closes = document.getElementById("closes");
let closes2 = document.getElementById("closes2");
let closes3 = document.getElementById("closes3");
let closes4 = document.getElementById("closes4");



register.addEventListener('click', () => {
    if (Validation())
        alert('success');
    else alert('error')
})

register.addEventListener('click', () => {
    if (Validation2())
        alert('success');
    else alert('error')
})

register.addEventListener('click', () => {
    if (Validation3())
        alert('success');
    else alert('error')
})

register.addEventListener('click', () => {
    if (Validation4())
        alert('success');
    else alert('error')
})

function Validation() {
    if (MobileNumberOrEmail.value.length < 11) {
        closes.style.display = "inline-block";
        checkCircle.style.display = "none";
        return false
    } else {
        checkCircle.style.display = "inline-block";
        closes.style.display = "none";
        return true
    }
}
function Validation2(){
    if (fullName.value.length < 8) {
        closes2.style.display = "inline-block";
        checkCircle2.style.display = "none";
        return false
    } else {
        checkCircle2.style.display = "inline-block";
        closes2.style.display = "none";
        return true
    }
}
function Validation3(){
    if (userName.value.length < 8) {
        closes3.style.display = "inline-block";
        checkCircle3.style.display = "none";
        return false
    } else {
        checkCircle3.style.display = "inline-block";
        closes3.style.display = "none";
        return true
    }
}
function Validation4(){
    if (password.value.length < 8) {
        closes4.style.display = "inline-block";
        checkCircle4.style.display = "none";
    } else {
        checkCircle4.style.display = "inline-block";
        closes4.style.display = "none";
    }
}
    

