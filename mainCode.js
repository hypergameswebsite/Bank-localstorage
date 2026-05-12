function login() {
    localStorage.getItem("user")
    localStorage.getItem("passw")
    localStorage.getitem("money") 
    localStorage.getItem("fName")
    localStorage.getItem("lName")
    let username = prompt("Username:  ")
    let password = prompt("Password:  ")
    if (username === user && password === passw) {
        console.log("Welcome, " + fName + " " + lName)
        
    }
}
