// Insert your code here
let registerName
let registerEmail
let registerPassword


document.querySelector('#register').addEventListener('click', function (){
registerName = document.querySelector('#registerName').value
registerEmail = document.querySelector('#registerEmail').value
registerPassword = document.querySelector('#registerPassword').value

fetch('https://wa-backend-lovat.vercel.app/users/signup', {

    method:'POST',
    
    headers: {'Content-Type':'application/json'},
    
    body: JSON.stringify({
        name : registerName,
        email : registerEmail,
        password : registerPassword
    })
    })
    .then(response => response.json())
    .then(data => {
        if (data.result){
            window.location.assign('index.html')
        }
    })
})



let connectionEmail
let connectionPassword


document.querySelector('#connection').addEventListener('click', function (){

connectionEmail = document.querySelector('#connectionEmail').value
connectionPassword = document.querySelector('#connectionPassword').value

fetch('https://wa-backend-lovat.vercel.app/users/signin', {

    method:'POST',
    
    headers: {'Content-Type':'application/json'},
    
    body: JSON.stringify({
        
        email : connectionEmail,
        password : connectionPassword
    })
    })
    .then(response => response.json())
    .then(data => {
        if (data.result){
            window.location.assign('index.html')
        }
    })
})