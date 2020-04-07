function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar-list") {
      x.className += " responsive";
    } else {
      x.className = "navbar-list";
    }
  }