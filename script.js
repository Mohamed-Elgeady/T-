

























const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const questionContainer = document.getElementById("questionContainer");
const heartLoader = document.getElementById("heartLoader");
const resultContainer = document.getElementById("resultContainer");

// زرار الـ No يهرب لمكان عشوائي جوه الصفحة كل ما الماوس يقرب منه
noBtn.addEventListener("mouseover", () => {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = window.innerWidth - btnWidth - 20;
  const maxY = window.innerHeight - btnHeight - 20;

  const newX = Math.floor(Math.random() * maxX) + 10;
  const newY = Math.floor(Math.random() * maxY) + 10;

  noBtn.style.position = "fixed";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// زرار الـ Yes: يخفي السؤال، يظهر لودر لمدة 3 ثواني، وبعدها يظهر النتيجة
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "block";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block";
  }, 3000);
});
