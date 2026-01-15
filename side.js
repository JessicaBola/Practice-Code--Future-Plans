const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".images");
const bottom = document.querySelector(".bottom");

let slideNumber = 0;


right.addEventListener("click",() =>{
  if (slideNumber < images.length) {
   slider.style.transform = `translateX(-${slideNumber * 700}px)`; slideNumber++; 
  } else{
   slider.style.transform =`translateX(0px)`;slideNumber =1;
  }
})
//left buttom

left.addEventListener("click", () => {
  slideNumber=slideNumber>0?
  slideNumber-1: images.length -1;
  slider.style.transform = `translateX(-${slideNumber*700}px)`;
})

//left and Right bottoms completed
//bottom slides

for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  div.dataset.index = i; // helpful for sliding
  bottom.appendChild(div);
}
const buttons = document.querySelectorAll(".button")
buttons[0].style.backgroundColor = "white";

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => {
      btn.style.backgroundColor = "gray";
    });
    button.style.backgroundColor = "white";
    slider.style.transform = `translateX(-${index * 100}%)`;
  });
});
