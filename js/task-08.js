const formEl = document.querySelector('.login-form');
const allUsers = [];
formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
const {
    elements: { email, password }
} = event.currentTarget;

    if (email.value === '') {
        return alert("Please fill in the login field!")
    }
    if (password.value === '') {
        return alert("Please fill in the password field!")
    }
    if (email.value === '' || password.value === '') {
       return  alert("Please fill in all the fields!")
    }
   
    class User {
        constructor(login, password) {
            this.login = login;
            this.password = password;
        }
        getUserInfo() {
            return console.log(`Login : ${this.login} and Password : ${this.password}`)

        }
    }
    const customer = new User(email.value, password.value);
    console.log(customer)

    allUsers.push(customer);
    console.log(allUsers)
    
    
    alert (`Thank you for registration user ${email.value}`)
    console.log(`Login : ${email.value} and Password : ${password.value}`)
    

    event.currentTarget.reset();
}
