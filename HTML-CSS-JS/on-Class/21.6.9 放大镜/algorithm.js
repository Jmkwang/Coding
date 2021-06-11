window.onload = function(){

    //获取小窗的元素
    var pos = document.getElementById("small");
    //持续获取鼠标在小窗内的位置并执行以下
    pos.onmousemove = function(event){

        //获取鼠标在小窗内的x,y
        var mouseX = event.pageX;        
        var mouseY = event.pageY;  

        //获取body的宽和高
        var bodyW = document.body.clientWidth;
        var bodyH = document.body.clientHeight;

        //算法什么的，画个图你就懂了
        //简单来说，获取鼠标在小窗里面的位置，转化为在小窗里面的百分比，套用到放大镜里面
        var pyX = (mouseX- (bodyW - 404) / 2) / 404; //鼠标长度-body宽度-小窗宽度 除2 再除小窗宽度得到宽度所在百分比
        var pyY = (mouseY - bodyH * 0.05)/254;  //0.05是因为我top了5vh 鼠标高度- body高度乘我给的top：5vh 再除小窗高度得到高度所在的百分比

        //再转化为大图的百分比，也就是偏移量了
        var moveX = 2000 * pyX;
        var moveY = 1250 * pyY;

        //获取magPic
        var magPic = document.getElementById("magPic");

        //以下同理等于→ transform: translate( -XXpx; -YYpx);
        magPic.style.transform = "translate(-" + moveX + "px, -" + moveY + "px)";

        //输入鼠标所在小图的(x,y)，无聊写着玩
        var showX = (mouseX- (bodyW - 404) / 2);
        var showY = mouseY - bodyH * 0.05;
        var showPos = document.getElementById("showPos");
        showPos.innerHTML = showX + "," + showY;

        //检查输出结果用
        console.log(mouseX, mouseY, bodyW, bodyH);
        console.log(pyX,pyY,moveX,moveY);
        console.log("translate(-" + moveX + "px, -" + moveY + "px)");
    }
}
