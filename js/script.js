// ===== 轮播图 =====
let index = 0;
const slides = document.querySelectorAll('.carousel img');

function showNextImage() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}
setInterval(showNextImage, 3000); // 每3秒切换一次

// ===== 表单验证 =====
document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault(); // 阻止表单默认提交
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('errorMsg');

  if (!username || !email || !password) {
    errorMsg.textContent = "所有字段都不能为空！";
    return;
  }

  // 简单邮箱格式验证
  if (!email.includes('@')) {
    errorMsg.textContent = "请输入有效的邮箱地址！";
    return;
  }

  // 成功时清空错误信息
  errorMsg.textContent = "";
  alert("注册成功！");
});
