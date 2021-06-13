window.onload = function(){

    var title = document.getElementsByClassName("cate");
    var content = document.getElementsByClassName("content");


    title[0].onclick = function click(n){
        aftTap(0);
    }

    title[1].onclick = function click(n){
        aftTap(1);
    }

    title[2].onclick = function click(n){
        aftTap(2);
    }

    title[3].onclick = function click(n){
        aftTap(3);
    }

    for(var i = 0; i < title.length; i++){
        title[i].num = i;
    }

    var write = "display: block;";

    function aftTap(num){
        console.log(title,num);
        var pp=document.querySelector(".content:nth-of-type("+num+")");
        pp.style.display= "block";

    }
}

