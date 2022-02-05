function login() {
  console.log("Clicked");

  var uid = document.getElementById("UserID").value;
  var pin = document.getElementById("Pin").value;
  console.log("Check User ID: " + uid + " Check Pin: " + pin);

  if (uid == "ben" && pin == 12345)
  {
    showPaynow();
  }
}

function showLogin() {
  console.log("Clicked");
  var sect = document.getElementById("sect2-container");
  sect.style.display = "block";
}

function showPaynow() {
  console.log("Clicked");
  var sect = document.getElementById("sect3-container");
  sect.style.display = "block";
}

function showRec() {
  console.log("Clicked");
  var sect = document.getElementById("sect4-container");
  sect.style.display = "block";
}

function showTelbox() {
  console.log("Clicked");
  var sect = document.getElementById("telbox");
  sect.style.display = "block";
}

function goNext(id) {
  var checked = checkInput(id);
  console.log(checked + " " + id);
  if (checked == true )
  {
    if (id == "tel") {
      console.log("Show sect 5")
      var sect = document.getElementById("sect5-container");
      sect.style.display = "block";
    }
    else if (id == "amt") {
      console.log("Show sect 6")
      var sect = document.getElementById("sect6-container");
      sect.style.display = "block";
    }
  }
}

function checkInput(id) {
  console.log("Checking for id: " + id);

  if (id == "tel") {
    console.log("Checking input box for value:");
    var cBox = document.getElementById("telbox").value;
    console.log(cBox);

    if (cBox >= 10000000) {
      return true;
    }

    else {
      return false;
    }
  }

  else {
    console.log("Checking input box for value:");
    var cBox = document.getElementById("amount").value;
    console.log(cBox);

    if (cBox > 0) {
      return true;
    }
    else {
      return false;
    }
  }
}

function showAmtbox() {
  console.log("Clicked");
  var sect = document.getElementById("amount");
  sect.style.display = "block";
}

function showSuccess() {
  console.log("Clicked");
  var sect = document.getElementById("sect7-container");
  sect.style.display = "block";
}