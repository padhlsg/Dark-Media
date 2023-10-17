window.addEventListener("scroll", function () {
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
  var icon = document.getElementById("icon");
  icon.classList.toggle("sticky", window.scrollY > 0);
});

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += "active";
}
