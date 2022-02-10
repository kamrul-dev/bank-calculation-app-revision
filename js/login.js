// login button event handler
document.getElementById('login-btn').addEventListener('click', function(){
    //cactch the user name input field value
    const userEmailField = document.getElementById('user-name');
    const userEmail = userEmailField.value;
    //catch the password input field value
    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;
    
    // check user email and password
    if(userEmail == "kamrulprl@gmail.com" && userPassword == "123"){
        window.location.href = 'banking.html';
    }
    
});