/* 返回随机颜色 */
function randomColor() {
    return "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")";
}
/* 轮播背景图片 */
$(function () {
    $.backstretch([  
          "/images/background/saber1.jpg",
          "/images/background/saber2.jpg",
          "/images/background/bg1.jpg"
    ], { duration: 60000, fade: 1500 });  
});