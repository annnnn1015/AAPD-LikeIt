import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

// header 選單點擊套用樣式，同時移除其他選項樣式
$(".header-list-item a").click(function (event) {
  $(this)
    .toggleClass("click-active")
    .parents()
    .siblings()
    .find("a")
    .removeClass("click-active");
});

$(".header-list-item-second").click(function (event) {
  $(this)
    .toggleClass("click-active")
    .siblings()
    .removeClass("click-active");
});

// header 課程探索點擊套用樣式，同時移除其他選項樣式
$(".collapse-list-item li a").click(function (event) {
  $(this)
    .addClass("list-active")
    .parents()
    .siblings()
    .find("a")
    .removeClass("list-active");
});

// courseInfo.html 已加入收藏 定時關閉
$('#exampleModal').on('shown.bs.modal', function () {
  setTimeout(function() {
      $('#exampleModal').modal('hide');
  }, 2000); // 2秒後自動關閉
});

// courseInfo.html 收藏btn切換
$(".courseInfo-banner .add-btn").click(function (event) {
  $(this).addClass("d-none").siblings().removeClass("d-none");
});

// courseInfo.html 章節單元點擊樣式
$(".course-unit .link-style").click(function (event) {
  $(this)
    .toggleClass("unit-link-active")
    .siblings()
    .removeClass("unit-link-active");
});

// courseVideo.html header影片右邊選單，點擊加active換color顏色
$(".course-video li").click(function (event) {
  $(this).toggleClass("active").siblings().removeClass("active");
});

// courseVideo.html 平板header影片下面選單點擊樣式
$(".course-list-tablet .link-style").click(function (event) {
  $(this)
    .toggleClass("unit-link-active")
    .siblings()
    .removeClass("unit-link-active");
});

// courseVideo.html 學習心得分類ul點擊樣式
$(".course-review-sort").click(function (event) {
  $(this).toggleClass("sort-active").siblings().removeClass("sort-active");
});

// 愛心標籤換圖
$(".like-tag").click(function (event) {
  $(this).toggleClass("like-tag-focus");
});

// 最多人學 | 最近更新 連結篩選
$(".max-link").click(function (event) {
  $(this).toggleClass("max-latest-link-focus");
  $(".latest-link").removeClass("max-latest-link-focus");
});

$(".latest-link").click(function (event) {
  $(this).toggleClass("max-latest-link-focus");
  $(".max-link").removeClass("max-latest-link-focus");
});

// 課程清單 程度標籤切換
$(".btn-tab").click(function (event) {
  if ($(".btn-tab").hasClass("btn-tab-focus")) {
    $(".btn-tab").removeClass("btn-tab-focus");
  }
  $(this).toggleClass("btn-tab-focus");
});

// AI-helper 定位
// 預設 position 為 fixed，當 footer 進入視窗時改 absolute ↓
const AIhelper = document.getElementById("AI-helper");
const footer = document.getElementById("footer");

window.addEventListener("scroll", () => {
  // getBoundingClientRect() 可返回元素的寬高，及其相對於 viewport 上下左右的位置資訊
  const AIhelperBottom =
    window.innerHeight - AIhelper.getBoundingClientRect().bottom;
  const footerTop = footer.getBoundingClientRect().top;

  // 若 footer 進入視窗
  if (footerTop < window.innerHeight) {
    AIhelper.classList.remove("position-fixed");
    AIhelper.classList.add("position-absolute");

    if (window.innerWidth >= 992) {
      AIhelper.style.bottom = `${513 + 16}px`;
      // lg 以上 footer 高 513px
    } else {
      AIhelper.style.bottom = `${548.6 + 16}px`;
      // footer 高 548.6px
    }

    // 若 footer 不在視窗裡
  } else {
    AIhelper.classList.remove("position-absolute");
    AIhelper.classList.add("position-fixed");
    AIhelper.style.bottom = "16px";
  }
});

// AI-helper 用 position: sticky; 測試的 JS ↓
// <body> 設置 id="body"
// <footer> 設置 id="footer"

// function calcHelperArea() {
//   let helperArea = document.querySelector("#helperArea");
//   let bodyH = document.querySelector("#body").offsetHeight;
//   let bodyW = document.querySelector("#body").offsetWidth;
//   let footerH = document.querySelector("#footer").offsetHeight;

//   helperArea.style.height = `${bodyH - footerH - 20 + 16}px`;
//   helperArea.style.width = `${bodyW + 16}px`;

//   console.log("body 高度：" + bodyH, typeof bodyH);
//   console.log("body 寬度：" + bodyW);
//   console.log("footer 高度：" + footerH);
//   console.log("helperArea 高度：" + helperArea.style.height);
//   console.log("helperArea 寬度：" + helperArea.style.width);
// }

// const viewHelperArea = () => {
//   helperArea.style.backgroundColor = "black";
//   helperArea.style.zIndex = 0;
// };

// 問題：圖示用 sticky，z-index 只能跟隨父層，無法單獨另外設更高的數值，捨棄 ↑

// 心得輸入框字數顯示
const thoughtsTextarea = document.getElementById("thoughtsTextarea");
const charCount = document.getElementById("charCount");

thoughtsTextarea.addEventListener("input", function () {
  charCount.textContent = `${thoughtsTextarea.value.length} / 200 字`;
});