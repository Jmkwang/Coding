window.onload=function(){

    var pics_pool =["./pics/1.jpg","./pics/2.jpg","./pics/3.jpg","./pics/4.jpg"];

    //time
    var time_pics = document.getElementById("time_pics");
    var cnt1 = 0;
    
    setInterval(() => {
        var tPic = pics_pool[cnt1];
        var tSrc = time_pics.setAttribute("src", tPic); 
        cnt1 ++;
        if(cnt1 == pics_pool.length){
            cnt1 = 0;
        }
    }, 2000);
    

    //click
    var left = document.getElementsByClassName("click_left")[0];
    var right = document.getElementsByClassName("click_right")[0];
    var click_pics = document.getElementById("click_pics");

    var current_count = 0;

    console.log(left);
    console.log(right);
    console.log(click_pics);

    left.onclick = function(){
        console.log("left");
        if(current_count == 0){
            current_count = 3;
        }else{
            current_count -= 1;
        }
        clickNchange(current_count);
    }

    right.onclick = function(){
        console.log("right");
        if(current_count == 3){
            current_count = 0;
        }else{
            current_count += 1;
        }
        clickNchange(current_count);
    }

    function clickNchange(cnum){
        var cPic = pics_pool[cnum];
        var cSrc = click_pics.setAttribute("src", cPic);
    }





















}