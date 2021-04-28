const column = ['30px', '90px', '150px', '210px', '270px', '320px', '390px', '450px', '510px'];
const row = ['0px', '35px', '70px', '100px', '130px', '160px','200px'];
var holdenPosition = 3;
var gameEnd = false;

var child = ['child0','child1','child2','child3','child4'];
var childRow = [0,0,0,0,0];
var childColumn = [0,0,0,0,0];
// can be used to set when child enter game.
var childTimeout = [0,12,24,36,45];
// progress bar values
var SaveBar = 0;
var DeadBar = 0;

// Function that runs on start
function main(){
  // Hide start button and background
  document.getElementById("StartButton").style.display = "none";
  document.getElementById("GameTitle").style.display = "none";
  var foo = setInterval(function(){
    // stops the time loop
    if(gameEnd) clearInterval(foo);
    // game code per interval called here.
    for(var i=0; i<child.length; i++){
      if(childTimeout[i] < 1 && childRow[i] < 5){
        // make sure there aren't two in the same row
        if (childRow[i] == 0 || childRow.filter(item => item == childRow[i]).length == 1){
          childRun(i);
        } else {
          resetChildPos(i)
        }
      }
      if(childColumn[i] == holdenPosition && childRow[i] == 5){
        resetChildPos(i);
        SaveBar = SaveBar + 5;
        // Check game score to see if player won
        if(SaveBar >= 100){
          gameEnd = true;
          document.getElementById("GameWon").style.display = "block";
          document.getElementById("RestartButton").style.display = "block";
        }
        if(SaveBar <= 100){
          document.getElementById("SaveBar").style.width = SaveBar + "%";
        }
      } else if(childRow[i] == 5){
        // when child gets falls
        childRun(i);
        document.getElementById(child[i]).src = "images/falling.png";
      } else if(childRow[i] == 6){
        if(document.getElementById(child[i]).style.display != "none"){
          DeadBar = DeadBar + 20;
          // Check game score to see if player lost
          if(DeadBar >= 100){
            gameEnd = true;
            document.getElementById("GameOver").style.display = "block";
            document.getElementById("RestartButton").style.display = "block";
          }
          if(DeadBar <= 100){
            document.getElementById("DeadBar").style.width = DeadBar + "%";
          }
          document.getElementById(child[i]).src = "images/child.gif";
          resetChildPos(i);
        }

      }


      childTimeout[i] = childTimeout[i] - 1;
    }
  }, 1000);
}



function restart(){
  gameEnd = false;
  childRow = [0,0,0,0,0];
  childColumn = [0,0,0,0,0];
  childTimeout = [0,12,24,36,45];
  SaveBar = 0;
  DeadBar = 0;
  document.getElementById("GameOver").style.display = "none";
  document.getElementById("GameWon").style.display = "none";
  document.getElementById("RestartButton").style.display = "none";
  for(var i=0; i<child.length; i++){
    document.getElementById(child[i]).style.top = row[0];
    document.getElementById(child[i]).style.left = column[0];
    document.getElementById(child[i]).src = "images/child.gif";
  }
  document.getElementById("DeadBar").style.width = DeadBar + "%";
  document.getElementById("SaveBar").style.width = SaveBar + "%";
  main()
}

// on start button click run start script
// function start(){
//   gameRunning = true;
//   var i = 0;
//   while(gameRunning){
//     i = i + 1;
//     sleep(200);
//     console.log(document.getElementById('child0'));
//     childRun(document.getElementById('child0'), i);
//     if(i==5){
//       gameRunning = false;
//     }
//   }
// }





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

function zoom() {
  document.body.style.zoom = "140%"
}