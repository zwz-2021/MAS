// ===== 轮播图 =====
let index = 0;
const prevButton = document.querySelector('.carousel .prev');
const nextButton = document.querySelector('.carousel .next');
const slides = document.querySelectorAll('.carousel img');

function showSlide() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

// 下一张
function showNextImage() {
  showSlide(index + 1);
}

// 上一张
function showPrevImage() {
  showSlide(index - 1);
}

// 重置自动播放计时器（防止快速点击卡顿）
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(showNextImage, 3000);
}

let timer = setInterval(showNextImage, 3000);

// 按钮事件绑定
nextButton.addEventListener('click', () => {
  showNextImage();
  resetTimer(); // 手动点击后重置计时器
});

prevButton.addEventListener('click', () => {
  showPrevImage();
  resetTimer();
});

