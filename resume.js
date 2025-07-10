let theme = document.getElementById('changeTheme');
let checkBox = document.getElementById('checkBox');
let navBar = document.getElementById("navBar");
function changeColor(){
if(checkBox.checked){
    document.body.style.backgroundColor = `##1c0a0a`;
 navBar.style.backgroundColor = `#1c0a0a`;
}
else{
    document.body.style.backgroundColor = "white";
    navBar.style.backgroundColor = `white`;

}
}
// function removeColor(){
//     document.body.style.backgroundColor = "blue";

// }

changeTheme.addEventListener("click",changeColor);



gsap.to(".element", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", 
    duration: 2,
    repeat: -1,
    yoyo: true
  });




  let circularProgress = document.querySelector(".circular-progress"),
  progressValue = document.querySelector(".progress-value");
let progressStartValue = 0,    
  progressEndValue = 90,    
  speed = 100;
  
let progress = setInterval(() => {
  progressStartValue++;
  progressValue.textContent = `${progressStartValue}%`
  circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`
  if(progressStartValue == progressEndValue){
      clearInterval(progress);
  }    
})

let circularProgress1 = document.querySelector("#circular-progress1"),
progressValue1 = document.querySelector("#progress-value1");
let progressStartValue1 = 0,    
progressEndValue1= 90,    
speed1 = 100;

let progress1 = setInterval(() => {
  progressStartValue1++;
  progressValue1.textContent = `${progressStartValue1}%`
  circularProgress1.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`
  if(progressStartValue1 == progressEndValue1){
      clearInterval(progress1);
  }    
})


let circularProgress2 = document.querySelector("#circular-progress2"),
progressValue2 = document.querySelector("#progress-value2");
let progressStartValue2 = 0,    
progressEndValue2= 80,    
speed2 = 100;

let progress2 = setInterval(() => {
  progressStartValue2++;
  progressValue2.textContent = `${progressStartValue1}%`
  circularProgress2.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`
  if(progressStartValue2 == progressEndValue2){
      clearInterval(progress2);
  }    
})
