import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

// courseVideo.html header影片右邊選單，點擊加active換color顏色
$('.course-video li').click(function (event) {
    $(this).toggleClass('active').siblings().removeClass('active');
});
