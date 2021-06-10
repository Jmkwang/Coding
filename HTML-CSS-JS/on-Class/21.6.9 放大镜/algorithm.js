window.onload = function(){
//     document.addEventListener('mousemove',function (e) {
//         //mousemove 只要鼠标一移动，就会触发事件
//         //获取鼠标最新的坐标
//         console.log(e.pageY);
//         console.log(e.pageX);
//     })

    // document.querySelector(".window").addEventListener("mouseenter", enter);
    // document.querySelector(".window").addEventListener("mousemove", move);
    // document.querySelector(".window").addEventListener("mouseleave", leave);
    // var window = document.getElementById("small");
    // var smallH = window.offsetHeight; //小窗高度
    // var smallW = window.offsetWidth; //小窗宽度
    // var bigS = document.body.clientHeight;
    // var bigH = document.body.clientWidth;
    // console.log(smallH,smallW,bigS,bigH);

    var pos = document.getElementById("small");

    pos.onmousemove = function(event){
        var smallX = event.pageX;        
        var smallY = event.pageY;        


        var miroW = document.body.clientWidth;
        var miroH = document.body.clientHeight;
    
        console.log(smallX, smallY, miroW, miroH);

        // (600,375)
        var calW = (miroW - 600) / 2;
        var calH = (miroH - 375) / 2;

        var timeX = miroW / calW;
        var timeY = miroH / calH;

        var pyX = (smallX - calW) * timeX;
        var pyY = (smallY - calH) * timeY;

    
        var magPic = document.getElementById("magPic");
        magPic.style.transform = "translate(-" + pyX + "px, -" + pyY + "px)";1
        console.log("translate(-" + pyX + "px, -" + pyY + "px)");
    }
    

}
