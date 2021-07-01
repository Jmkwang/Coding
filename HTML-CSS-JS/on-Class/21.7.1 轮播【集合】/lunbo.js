window.onload=function(){
    //time
    var time_pool=["./pics/1.jpg","./pics/2.jpg","./pics/3.jpg","./pics/4.jpg"]
    var pics = document.getElementById("time_pics");
    var cnt1 = 0;
    
    setInterval(() => {
        var timePic = time_pool[cnt1];
        var realSrc = pics.setAttribute("src", timePic); 
        cnt1 ++;
        if(cnt1 == time_pool.length){
            cnt1 = 0;
        }
    }, 2000);
    
    //click

}