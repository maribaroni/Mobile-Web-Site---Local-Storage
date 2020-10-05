$(document).ready(function(){ 
  $("#header1").html(`<h1>My name is ${localStorage.getItem("Name")}.</h1>`);
  $("#header2").html(`<h2>My Student Number is ${localStorage.getItem("Student Number")}.</h2>`);
  $("#header3").html(`<h3>My Sheridan Login is ${localStorage.getItem("Slate login")}.</h3>`);
  $("#photo").html(`<figure><img src="../images/photo.jpg"></figure>`);
  $("#backbutton").html(`<button> Click Me to Come back</a></button>`);

$("button").click(function(){
  window.location.href="../index.html";
});

});