$(document).ready(function () {

  var firstName = "Mariana";
  var lastName = "Baroni";
  var fullName = firstName + " " + lastName;
  var studentId = "991581300";
  var slateLogin = "baroni";

  //var loginName = "baronima"; //login to be used to generate the list

  var list = {
    number: ["2", "1", "18", "15", "14", "9", "13", "1"],
    element: ["Ball", "Apple", "Ring", "Oister", "Necklace", "Iron", "Monkey", "Apple"],
    image: ["Ball.jpg", "Apple.jpg", "Ring.jpg", "Oister.png", "Necklace.jpg", "Iron.jpg", "Monkey.jpg", "Apple.jpg"]
  };

  var mydata = new Array();

  class MyData {
    constructor(number, element, image) {
      this.number = number;
      this.element = element;
      this.image = image;
    }
  }

  for (let i in list.number) {
    mydata.push(new MyData(list.number[i], list.element[i], list.image[i]));
  }

  localStorage.setItem("Name", fullName);
  localStorage.setItem("Student Number", studentId);
  localStorage.setItem("Slate login", slateLogin);

  $(".header").html(`${fullName} / A01 / SYST24444`);
  $(".footer").html(`${studentId} / ${slateLogin}`);
  $("#headTitle").html(`My Data<br>`);

  var count = 1;
  for (let item of mydata) {
    if (count <= 4) {
      $("#left").append(`<section title=${item.number}><img align="Left" src="images/${item.image}" width = '30'> &nbsp ${item.element}</section><br>`);
    } else {
      $("#right").append(`<section title=${item.number}><img align="Left" src="images/${item.image}" width = '30'> &nbsp ${item.element}</section><br>`);
    }
    count++;
  }

  var holdNumber = "2";
  $("#button1").click(function () {

    $("#left section[title = " + holdNumber + "]").toggle();
    $("#right section[title = " + holdNumber + "]").toggle();
  });

  $("#button2").click(function () {
    $("#list").toggleClass("newFormat");
  });

});