var englishPronunciation = ["a", "b", "t", "th", "dj", "H","kh", "d", "dk", "r", "z", "s", "sh", "S", "D", "T", "Z", "c", "gh", "f", "q", "k", "L", "m", "n", "h", "w", "y"];

function render(Ab) {
  var img = "images/" + Ab + ".png";
  document.getElementById("letter").src = img;
  document.getElementById("letter").alt = Ab;
  document.getElementById("enLetter").innerHTML = englishPronunciation[Ab];
}


function next() {
  console.log("pushed next");
  var num = document.getElementById("letter").alt;
  num = parseInt(num);
  num += 1;
  render(num);
}


function flip() {
  if (document.getElementById("Aside").style.display != "none") {
    document.getElementById("Aside").style.display = "none";
    document.getElementById("Eside").style.display = "block";
  } else {
    document.getElementById("Aside").style.display = "block";
    document.getElementById("Eside").style.display = "none";
  }
}
