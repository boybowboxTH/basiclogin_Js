let message = document.getElementById('val1');
let btn1 = document.getElementById('submit');

let tuser = document.getElementById('text1');
let tpw1 = document.getElementById('pw1');

var user = new Object();
user.name = "boy"
user.stat = "Admin"
user.id = "001"
const delayinmillS = 6000 //1000 = 1s
    
function showMessage(){
  if(tuser.value === "admin" && tpw1.value === "admin"){
    message.innerHTML = "Welcome " + user.name +"<br>"+"Permission: "+user.stat+"<br>"+"UserID:  "+user.id;
    setTimeout(delayinmillS)
    window.location.href = './test2.html'//can change page;
  }else{
    message.innerHTML = "username or password was wrong!!"
  }
}
btn1.addEventListener('click', showMessage);