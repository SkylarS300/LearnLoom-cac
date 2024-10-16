function login(user, pwd) {
    // handle login check here
    let success = true;
  
    if (success) {
      window.location.href = "library.html";
    }
  }
  
  let saveduser = window.localStorage.getItem("email");
  let savedpwd = window.localStorage.getItem("password");
  
  if (saveduser && savedpwd && saveduser.length > 0 && savedpwd.length > 0) {
    login(saveduser, savedpwd);
  }

function checkLogin(email, password){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login.addEventListener("submit", (e)=>{
        e.preventDefault()
        let username = email.value
        let password = password.value
        if (username.length<1){
            alert("Please enter an email")
            return;
        }
        if (password.length<1){
            alert("Please enter a password")
            return;
        }
        window.localStorage.setItem("username", username)
        window.localStorage.setItem("password", password)
        window.location.href(library.html)
              
    })
}       
