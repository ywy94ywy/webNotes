function drag(elem) {
    elem.onmousedown = start;

    function start(e) {
        disX = e.clientX - e.target.offsetLeft;
        disY = e.clientY - e.target.offsetTop;
        move();
        stop();
        return false
    }

    function move() {
        document.onmousemove = function (e) {
            //不超出边框
            l = e.clientX - disX
            t = e.clientY - disY
            l < 0 ? elem.style.left = '0px' : (elem.style.left = l + 'px');
            t < 0 ? elem.style.top = '0px' : (elem.style.top = t + 'px');
            return false
        }
    }

    function stop() {
        document.onmouseup = function (e) {
            document.onmousemove = null;
            document.onmouseup = null
        }
    }
}