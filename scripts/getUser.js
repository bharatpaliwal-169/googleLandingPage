// // var getUser = localStorage['key'+"<br>"];
// const getuser = localStorage.getItem('key');
// console.log(getuser);
// document.getElementById('getuser').innerHTML = getuser + "<br>";

document.getElementById('test').addEventListener('mouseover',function() {
  const pswd = document.getElementById('myInput').value;
  if(pswd == ''){
    window.alert("Please enter the password!!");
  }
});


// import user from '/setUser';
// const getUser = user;
// document.getElementById('getuser').innerHTML = getUser;