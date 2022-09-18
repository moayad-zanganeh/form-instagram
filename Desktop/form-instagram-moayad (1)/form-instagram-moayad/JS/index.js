



let registerInput = (e) =>{
    let register = document.getElementById("register");
    if(MobileNumberOrEmail.value.length < 11 ){
        alert('error')
    }else if(MobileNumberOrEmail.value.length >= 11 ){
        alert('success')
    }else if(fullName.value.length < 8){
        alert('error')
    }else if(fullName.value.length >= 8){
        alert('success')
    }else if(userName.value.length < 8){
        alert('error')
    }else if(userName.value.length >= 8){
        alert('success')
    }else if(password.value.length < 8){
        alert('error')
    }else if(password.value.length >= 8){
        alert('success')
    }

}

let mobileNumberOrEmailInput = (e) =>{
   let MobileNumberOrEmail = document.getElementById("MobileNumberOrEmail");
   let checkCircle = document.getElementById("checkCircle");
   let closes = document.getElementById("closes");

    if (MobileNumberOrEmail.value.length < 11) {
        closes.style.display = "inline-block";
        checkCircle.style.display = "none";
    } else {
        checkCircle.style.display = "inline-block";
        closes.style.display = "none";
    }
}

let fullNameInput = (e) =>{
    let fullName = document.getElementById("fullName");
    let checkCircle2 = document.getElementById("checkCircle2");
    let closes2 = document.getElementById("closes2");

    if (fullName.value.length < 8) {
        closes2.style.display = "inline-block";
        checkCircle2.style.display = "none";
    } else {
        checkCircle2.style.display = "inline-block";
        closes2.style.display = "none";
    }
}

let userNameInput = (e) =>{
    let userName = document.getElementById("userName");
    let checkCircle3 = document.getElementById("checkCircle3");
    let closes3 = document.getElementById("closes3");

    if (userName.value.length < 8) {
        closes3.style.display = "inline-block";
        checkCircle3.style.display = "none";
    } else {
        checkCircle3.style.display = "inline-block";
        closes3.style.display = "none";
    }
}

let passwordInput =(e) =>{
    let password = document.getElementById("password");
    let checkCircle4 = document.getElementById("checkCircle4");
    let closes4 = document.getElementById("closes4");
    
    if (password.value.length < 8) {
        closes4.style.display = "inline-block";
        checkCircle4.style.display = "none";
    } else {
        checkCircle4.style.display = "inline-block";
        closes4.style.display = "none";
    }
}


