window.onload = function () {

    // 获取tap_title按钮
    var tap_title = document.querySelectorAll("div.tap_title > div");

    // 获取tap_page页面
    var tap_page = document.querySelectorAll("div.tap_page > div");

    tap_title[0].onclick = function () {
        tap_change(tap_title[0])

    }
    tap_title[1].onclick = function () {
        tap_change(tap_title[1])

    }
    tap_title[2].onclick = function () {
        tap_change(tap_title[2])

    }
    tap_title[3].onclick = function () {
        tap_change(tap_title[3])

    }

    
    for(var i = 0; i < tap_title.length; i++){
        tap_title[i].num = i;
    }
    
    
    





    // 封装Tap页函数
    function tap_change(tap) {
        var index = tap.num;
        for (var i = 0; i < tap_title.length; i++) {
            if (tap_title[i].num === index) {
                tap_title[i].className = 'choose';
                tap_page[i].className = 'show';
            } else {
                tap_title[i].className = '';
                tap_page[i].className = '';
            }
        }

    }
}