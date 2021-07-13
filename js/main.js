var elForm = document.querySelector(".form");
var elInput = elForm.querySelector(".form-input");
var elResult1 = document.querySelector(".result1");
var elResult2 = document.querySelector(".result2");
var elResult3 = document.querySelector(".result3");
var elResult4 = document.querySelector(".result4");

var menSpeed = 3.6;
var bikeSpeed = 20.1;
var carSpeed = 70;
var planeSpeed = 800;

// function checkTime(distance, speed) {
  
// }
// //minut olish
function getminutes(time) {
  var minut = parseInt((time/3600 - getsoat(time)) * 60);
  // console.log(minut);
  return minut;
}

//soatniu olish
function getsoat(time) {
  var soat = parseInt(time / 3600);
  // console.log(soat);
  return soat;
}

//sekundni olish
function getsekund(time) {
  var sekund = Math.ceil(((time / 3600 - getsoat(time)) * 60 - getminutes(time)) * 60);
  // console.log(sekund);
  return sekund;
}

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var numberResult = Number(elInput.value.trim());

  //birinchi
  var time = 1000 * numberResult / menSpeed;

  var ressoat = getsoat(time);
  var resminut = getminutes(time);
  var ressekund = getsekund(time);

  if (ressoat !== 0){
    if (resminut !== 0) {
      if (ressekund !== 0) {
        elResult1.innerHTML = ressoat + "soat " + resminut + "minut " + ressekund + "sekund";
      }
      else{
        elResult1.innerHTML = ressoat + "soat " + resminut + "minut";
      }
    }
    else {
      if (ressekund !== 0) {
        elResult1.innerHTML = ressoat + "soat " + ressekund + "sekund";
      }
      else{
        elResult1.innerHTML = ressoat + "soat";
      }
    }
  }
  else {
    if (resminut !== 0) {
      if (ressekund !== 0) {
        elResult1.innerHTML =  resminut + "minut " + ressekund + "sekund";
      }
      else{
        elResult1.innerHTML = resminut + "minut";
      }
    }
    else {
      if (ressekund !== 0) {
        elResult1.innerHTML = ressekund + "sekund";
      }
    }
  }

  //ikkinchi
  var time = 1000 * numberResult / bikeSpeed;
  var ressoat = getsoat(time);
  var resminut = getminutes(time);
  var ressekund = getsekund(time);
  if (ressoat !== 0){
    if (resminut !== 0) {
      if (ressekund !== 0) {
        elResult2.innerHTML = ressoat + "soat " + resminut + "minut " + ressekund + "sekund";
      }
      else{
        elResult2.innerHTML = ressoat + "soat " + resminut + "minut";
      }
    }
    else {
      if (ressekund !== 0) {
        elResult2.innerHTML = ressoat + "soat " + ressekund + "sekund";
      }
      else{
        elResult2.innerHTML = ressoat + "soat";
      }
    }
  }
  else {
    if (resminut !== 0) {
      if (ressekund !== 0) {
        elResult2.innerHTML =  resminut + "minut " + ressekund + "sekund";
      }
      else{
        elResult2.innerHTML = resminut + "minut";
      }
    }
    else {
      if (ressekund !== 0) {
        elResult2.innerHTML = ressekund + "sekund";
      }
    }
  }

  


  //uchinchi
  var time = 1000 * numberResult / carSpeed;
  var ressoat = getsoat(time);
  var resminut = getminutes(time);
  var ressekund = getsekund(time);
  if (ressoat !== 0){
    if (resminut !== 0) {
      if (ressekund !== 0) {
        elResult3.innerHTML = ressoat + "soat " + resminut + "minut " + ressekund + "sekund";
      }
      else{
        elResult3.innerHTML = ressoat + "soat " + resminut + "minut";
      }
    }
    else {
      if (ressekund !== 0) {
        elResult3.innerHTML = ressoat + "soat " + ressekund + "sekund";
      }
      else{
        elResult3.innerHTML = ressoat + "soat";
      }
    }
  }
  else {
    if (resminut !== 0) {
      if (ressekund !== 0) {
        elResult3.innerHTML =  resminut + "minut " + ressekund + "sekund";
      }
      else{
        elResult3.innerHTML = resminut + "minut";
      }
    }
    else {
      if (ressekund !== 0) {
        elResult3.innerHTML = ressekund + "sekund";
      }
    }
  }


  //tortinchi
  var time = 1000 * numberResult / planeSpeed;
  var ressoat = getsoat(time);
  var resminut = getminutes(time);
  var ressekund = getsekund(time);
  if (ressoat !== 0){
    if (resminut !== 0) {
      if (ressekund !== 0) {
        elResult4.innerHTML = ressoat + "soat " + resminut + "minut " + ressekund + "sekund";
      }
      else{
        elResult4.innerHTML = ressoat + "soat " + resminut + "minut";
      }
    }
    else {
      if (ressekund !== 0) {
        elResult4.innerHTML = ressoat + "soat " + ressekund + "sekund";
      }
      else{
        elResult4.innerHTML = ressoat + "soat";
      }
    }
  }
  else {
    if (resminut !== 0) {
      if (ressekund !== 0) {
        elResult4.innerHTML =  resminut + "minut " + ressekund + "sekund";
      }
      else{
        elResult4.innerHTML = resminut + "minut";
      }
    }
    else {
      if (ressekund !== 0) {
        elResult4.innerHTML = ressekund + "sekund";
      }
    }
  }
 });
