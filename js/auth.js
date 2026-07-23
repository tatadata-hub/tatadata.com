// ==========================
// SHOW PASSWORD
// ==========================

const togglePassword = document.getElementById("togglePassword");

const password = document.getElementById("password");

togglePassword.addEventListener("click",()=>{

    if(password.type==="password"){

        password.type="text";

        togglePassword.innerHTML="🙈";

    }else{

        password.type="password";

        togglePassword.innerHTML="👁";

    }

});

// ==========================
// LOGIN
// ==========================

const loginForm=document.getElementById("loginForm");

loginForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const email=document.getElementById("email").value;

    const pass=document.getElementById("password").value;

    console.log(email);

    console.log(pass);

    alert("Sebentar lagi login akan dihubungkan ke Google Apps Script 🚀");

});
