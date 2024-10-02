import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

// header 選單點擊套用樣式，同時移除其他選項樣式
$(".header-list-item a").click(function (event) {
  $(this)
    .addClass("click-active")
    .parents()
    .siblings()
    .find("a")
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
