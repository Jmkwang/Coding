window.onload = function () {

   
    var box1 = document.getElementById("box1");

    var body = document.getElementsByTagName("body");
    // body[0].onmousemove

    var box_img = document.querySelectorAll("div.box > img")[0]

    box_img.onmousemove = function(event){
        var x = event.pageX + 10;
        var y = event.pageY -10;

        box1.style.left = x +"px";
        box1.style.top = y-100 + "px";

        box1.style.backgroundPositionX = -x*2 -200 + "px"
        box1.style.backgroundPositionY = -y*2-300 + "px"


    }


}