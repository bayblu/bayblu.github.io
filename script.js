
const column = ['30px', '90px', '150px', '210px', '270px', '320px', '390px', '450px', '510px'];
const row = ['0px', '35px', '70px', '100px', '130px', '160px'];
var holdenPosition = 0;
var roww = 1;


document.addEventListener('keypress', logKey);
function logKey(e) {
  holdenMove(e.code);
}

function holdenMove(keypress){
  // Move Left on A key press
  if(keypress == 'KeyA' && holdenPosition > 0){
    // move life a column
    holdenPosition -= 1;
    document.getElementById('holden').style.left = column[holdenPosition];
  }
  if(keypress == 'KeyD' && holdenPosition < 8){
    holdenPosition += 1;
    document.getElementById('holden').style.left = column[holdenPosition]
  }

  var child = document.getElementById('child');
  childRun(child, roww)
  roww += 1;
}

function childRun(element, currentRow){
  element.style.top = row[currentRow];
  var index = element.style.zIndex;
  element.style.zIndex = parseInt(index) + 1;
  console.log(index)
}






// var englishPronunciation = ["a", "b", "t", "th", "dj", "H","kh", "d", "dk", "r", "z", "s", "sh", "S", "D", "T", "Z", "c", "gh", "f", "q", "k", "L", "m", "n", "h", "w", "y"];

// function render(Ab) {
//   var img = "images/" + Ab + ".png";
//   document.getElementById("letter").src = img;
//   document.getElementById("letter").alt = Ab;
//   document.getElementById("enLetter").innerHTML = englishPronunciation[Ab];
// }


// function next() {
//   console.log("pushed next");
//   var num = document.getElementById("letter").alt;
//   num = parseInt(num);
//   num += 1;
//   render(num);
// }


// function flip() {
//   if (document.getElementById("Aside").style.display != "none") {
//     document.getElementById("Aside").style.display = "none";
//     document.getElementById("Eside").style.display = "block";
//   } else {
//     document.getElementById("Aside").style.display = "block";
//     document.getElementById("Eside").style.display = "none";
//   }
// }
