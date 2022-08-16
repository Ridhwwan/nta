// // SIGN UP VALIDATION

// // Getting Sign in from Sign in form

// const signEmail = document.getElementsById("sign-email");
// const signPassword = document.getElementsById("sign-password");
// const reSignPassword = document.getElementsById("re-sign-password");



// const signError = document.getElementById("error-sign")


// // const signEm = "salaudeenridhwan@gmail.com"
// // const signP = "ridhwanspassword"


// let savedPassword = []

// function save (){
//     let savedPassword = signPassword
// }


// form.addEventListener('submit', (e) => {
//     let message = []

//     // Check if the email input is empty upon submission
//     if (signEmail.value === '' || name.value == null){
//         message.push("Please enter a valid email address")
//     }

//     if (logPassword.value.length <= 5){
//         message.push("Password must be longer than 5 characters")
//     }

//     if (logPassword.value.length >= 16){
//         message.push("Password must be less than 16 characters")
//     }
    
//     if (logPassword == password){
//         message.push("Password cannot be password")
//     }


//     if (message.length> 0){
//         e.preventDefault()
//         logError.innerText = message.join
//     }

//     if (logEmail != logEm){
//         e.preventDefault()
//         message.push("Email not found in database")
//     }
//     if (reSignPassword != signPassword){
//         e.preventDefault()
//         message.push("Passwords don't match. Please check your passwords")
//     }
// })



// // LOG IN VALIDATION

// // Getting Log in from log in form
// const logEmail = document.getElementsById("log-email");
// const logPassword = document.getElementsById("log-password");
// const logError = document.getElementById("error-log")

// form.addEventListener('submit', (e) => {
//     let message = []

//     // Check if the email input is empty upon submission
//     if (logEmail.value === '' || logEmail.value == null){
//         e.preventDefault()
//         message.push("Please enter your email to log in")
//     }

//     if (logPassword.value.length <= 5){
//         e.preventDefault()
//         message.push("Password must be longer than 5 characters")
//     }

//     if (logPassword.value.length >= 16){
//         e.preventDefault()
//         message.push("Password must be less than 16 characters")
//     }
    
//     if (logPassword == 'password'){
//         message.push("Password cannot be password")
//     }

//     if (message.length> 0){
//         e.preventDefault()
//         logError.innerText = message.join
//     }


//     if (logPassword != signPassword){
//         e.preventDefault()
//         message.push("Incorrect Password")
//     }

//     if (logEmail != signPassword){
//         e.preventDefault()
//         message.push("Email not found in database")
//     }
// })


