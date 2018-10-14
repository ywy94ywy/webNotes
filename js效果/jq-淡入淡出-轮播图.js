var img = $('.wrap img')
var index = $('.index span')
var content = $('.content')
var prevbtn = $('.prev')
var nextbtn = $('.next')
var i = 0;
var fadeSpeed = 500;
var interval = 2000;
var myhide = setInterval(fade, interval)
//上一张
prevbtn.click(function () {
    i -= 2;
    fade();
    return false
})
//下一张

nextbtn.click(function () {
    fade()
    return false
})
//鼠标移入停止
content.hover(function () {
    stop()
}, function () {
    start()
})

//图片和小圆点同步变化
function fade() {
    i++
    let k = (i + 4) % 4
    img.eq(k).fadeIn(fadeSpeed).siblings().fadeOut(fadeSpeed);
    index.eq(k).css('background', '#d00').siblings().css('background', '#fff')
}

function start() {
    myhide = setInterval(fade, interval)
}

function stop() {
    clearInterval(myhide)
}
//小圆点点击事件
index.click(function () {
    i = $(this).index()
    i--
    fade()
})