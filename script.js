const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes ng luod pako-btn");
const noBtn = document.querySelector(".no wa nako ng luod-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Ng Luod Pa Ko :<";
  gif.src =
    "https://cdn.cdnparenting.com/articles/2021/10/03095412/274915004.webp";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});