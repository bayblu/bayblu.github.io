const column = ['30px', '90px', '150px', '210px', '270px', '320px', '390px', '450px', '510px'];
const row = ['0px', '35px', '70px', '100px', '130px', '160px'];
var holdenPosition = 0;
var gameEnd = false;

var child = ['child0','child1','child2','child3','child4'];
var childRow = [0,0,0,0,0];
var childColumn = [0,0,0,0,0];
// can be used to set when child enter game.
var childTimeout = [0,5,10,15,20];


function main(){
  var foo = setInterval(function(){
    if(gameEnd) clearInterval(foo);
    // game code per interval called here.
    for(var i=0; i<child.length; i++){
      if(childTimeout[i] < 1 && childRow[i] < 5){
        childRun(i);
      }
      if(childColumn[i] == holdenPosition && childRow[i] == 4){
        resetChildPos(i)
      } else if(childRow[i] == 4){
        document.getElementById(child[i]).style.display = "none";
      }


      childTimeout[i] = childTimeout[i] - 1;
    }


  }, 1000);
}

// on start button click run start script
function start(){
  gameRunning = true;
  var i = 0;
  while(gameRunning){
    i = i + 1;
    sleep(200);
    console.log(document.getElementById('child0'));
    childRun(document.getElementById('child0'), i);
    if(i==5){
      gameRunning = false;
    }
  }
}



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
}

function resetChildPos(childInt){
  var element = document.getElementById(child[childInt]);
  childRow[childInt] = 0;
  element.style.top = row[0];
  var num = Math.floor(Math.random() * 10);
  element.style.left = column[num];
  childColumn[childInt] = num;
  element.style.zIndex = 0;
}

function childRun(childInt){
  var element = document.getElementById(child[childInt]);
  childRow[childInt] = childRow[childInt] + 1;
  element.style.top = row[childRow[childInt]];
  var index = element.style.zIndex;
  element.style.zIndex = parseInt(index) + 1;
}
