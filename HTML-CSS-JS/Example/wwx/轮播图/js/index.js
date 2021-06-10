window.onload = function () {

    var imgList = document.getElementsByTagName("li");

    //获取所有的a 
    var allA = document.querySelectorAll("div.navDiv > a");

    //设置默认图片索引
    var index = 0;

    //设置默认的选中效果
    allA[index].style.width = 25 + "px"

    //设置默认图片
    imgList[index].style.display = "block"


    //点击切换到指定图片
    for (var i = 0; i < allA.length; i++) {
        //循环的时候给每a添加一个num属性
        allA[i].num = i;

        //绑定单机乡音函数
        allA[i].onclick = function () {

            //更新index
            index = this.num;

            //每点击一次，循环一次
            change()

        }
    }


    //每三秒切换一次
    var qiehuan = setInterval(function () {
        index++;

        if (index > imgList.length - 1) {
            index = 0
        }
        change()
    }, 3000)


    // 获取左右按钮
    var btnLeft = document.querySelectorAll("div.btn_Left");
    var btnRight = document.querySelectorAll("div.btn_Right");


    // 绑定左右按钮点击事件

    btnLeft[0].onclick = function () {
        //更新index
        index--;

        if (index < 0) {
            index = allA.length-1
        }

        //每点击一次，循环一次
        change()
    }


    btnRight[0].onclick = function () {
        //更新index
        index++;

        if (index > allA.length-1) {
            index = 0
        }

        //每点击一次，循环一次
        change()
    }

    //创建切换函数
    function change() {
        //每点击一次，循环一次
        for (var j = 0; j < allA.length; j++) {
            allA[j].style.width = 10 + "px";

            if (imgList[j].style.display == "block") {

                //透明
                imgList[j].style.opacity = 0;

                //这里要等待过渡的1s，然后才消失
                setTimeout(function () {
                    imgList[j].style.display = "none"
                }, 1000);

                //清除一次
                clearInterval(qiehuan)

                // 再次开启
                qiehuan = setInterval(function () {
                    index++;

                    if (index > imgList.length - 1) {
                        index = 0
                    }
                    change()
                }, 3000)

            } else {
                imgList[j].style.display = "none"
            }

            //这里的定时器不能掉
            setTimeout(function () {
                imgList[index].style.opacity = 1;
            }, 0);


            //显示图片和点点
            allA[index].style.width = 25 + "px"
            imgList[index].style.display = "block";

        }
    }

}