window.onload = function(){

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
