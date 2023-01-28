const container = document.querySelector(".contairer"),
    form = document.querySelector(".form"),
    PwShowHide = document.querySelectorAll(".showHidePw"),
    PwFields = document.querySelectorAll(".password"),
    loginProf = document.querySelector(".loginProf-link"),
    email = document.querySelector(".email"),
    loginEt = document.querySelector(".loginEt-link");

// show hide password
PwShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{
        PwFields.forEach(PwFields =>{
            if(PwFields.type ==="password"){
                PwFields.type = "text";
                PwShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye-slash","uil-eye")
                })
            }else{
                PwFields.type = "password";
                PwShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye","uil-eye-slash")
                })
            }
        })
    })
})
// change form
loginProf.addEventListener("click", ( )=>{
    container.classList.add("active")
})
loginEt.addEventListener("click", ( )=>{
    container.classList.remove("active")
})
//show erreur
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'input-field error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//message d'erreurs
form.addEventListener('submit', function(e){
    e.preventDefault();
    if(email.value === ''){
        showError(email, 'username est obligatoire')
    }
    if(PwFields.value === ''){
        showError(PwFields, 'password est obligatoire')
    }

})
