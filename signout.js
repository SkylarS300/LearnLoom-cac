document.addEventListener("DOMContentLoaded", (e)=>{
    let savedUser = window.localStorage.getItem("username")
    let savedPass = window.localStorage.getItem("password")
    if (savedUser == null || savedPass == null){
        alert("No user found")
        window.Location.href = ('index.html')
    }
})