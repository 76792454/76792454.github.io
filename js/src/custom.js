/* 返回随机颜色 */
function randomColor() {
    return "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")";
}
/* 轮播背景图片 */
$(function () {
    $.backstretch([  
          "/images/touxiang.png",
    ], { duration: 60000, fade: 1500 });  
});