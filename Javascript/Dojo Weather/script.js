var cookieElement = document.getElementById("cookies");
function removeCookie() {
  cookieElement.remove();
}

function cTof(c) {
  return c * 1.8 + 32;
}
function fToc(f) {
  return (f - 32) / 1.8;
}
function convert() {
  var parameter = document.getElementById("temp").value;
  var degrees = document.querySelectorAll(".low , .high");
  if (parameter == "Fernh")
  for (var i = 0; i < degrees.length; i++) {
    degrees[i].innerText = cTof(degrees[i].innerText).toFixed(0);
    }
  if (parameter == "Celi")    
  for (var i = 0; i < degrees.length; i++) {
      degrees[i].innerText = fToc(degrees[i].innerText).toFixed(0);
    }
}


