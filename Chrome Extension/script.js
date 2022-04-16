var button = document.getElementById('btn')

button.addEventListener('click', Start)
function Start() {
  console.log("started")
  button.innerHTML = "Stop Connecting"
  button.style.backgroundColor= "rgb(255,41,30)"
  button.style.border = "2px solid rgb(255,41,30)"
  button.removeEventListener('click', Start)
  button.addEventListener('click', Stop)
  button.value = "Stop"
  circularBar()
}
function Stop(){
  console.log("stopped")
  button.innerHTML = "Start Connecting"
  button.style.backgroundColor= "rgb(144, 220, 134)"
  button.style.border = "2px solid rgb(144,220,134)"
  button.removeEventListener("click", Stop);
  button.addEventListener("click", Start);
  button.value = "Start";
}


function circularBar() {
let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 100;
let speed = 100;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}`;
  progressBar.style.background = `conic-gradient(
      #66ff87 ${progressValue * 3.6}deg,
      #ffffff ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);

var connection = document.getElementsByClassName('artdeco-button -button--secondary')

for (let i = 0; i < connection.length; i=i+1) {
  connection[i].click() 
 }
}






