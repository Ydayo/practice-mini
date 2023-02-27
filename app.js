const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function () {
  ham.classList.toggle('active');
  nav.classList.toggle('active');
});

function array() {
    const omikuji = ["大吉", "小吉", "中吉", "吉", "凶", "大凶"]
    document.getElementById("dat").innerText = omikuji[Math.floor(Math.random() * omikuji.length)];
}
