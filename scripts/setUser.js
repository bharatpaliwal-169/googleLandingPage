// function setUsername() {
//   var user = document.getElementById('floatingInput').value;
//   console.log(user);
//   localStorage.setItem('key',user);
//   // localStorage['key'] = user;
// }

// function setUsername() {
//   var at = document.getElementById("floatingInput").value.indexOf("@");
//   if (at == -1) {
//     alert("Not a valid e-mail!");
//   }
// }

document.getElementById('setuser').addEventListener('mouseover',function () {
  var name = document.getElementById('floatingInput').value.indexOf('@');
  if(name == -1){
    window.alert('Please enter a valid email address!!');
  }
});

// document.getElementById('setuser').addEventListener('click',function () {
//   const user = document.getElementById('floatingInput').value;
//   console.log(user);
//   localStorage.setItem('key',user);
// })

// export default user;