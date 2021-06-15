window.onload = function(){

    /* tab-cate-content */
    var cate = document.getElementsByClassName("cate");

    cate[0].onclick = function click(){
        dropBack(1);
    };
    
    cate[1].onclick = function click(){

    };

    cate[2].onclick = function click(){

    };
    
    cate[3].onclick = function click(){

    };

    for(var i = 0; i < cate.length; i++){
        cate[i].num = i;
    }

    function dropBack(num){
        nth = num + 1;
        var cateDrop = document.querySelector(".content:nth-of-type(" + nth + ")");
        cateDrop.style.display = "block";
        cateDrop.style.transition = "translateX(-10)";
    }

    // function aftTap(){
    //     console.log(title,num);

    //     //display:block
    //     
    //     
    //     show.style.display= "block";
    //     // var bg = document.querySelector(".content:target:nth-of-type(" + nth + ")");
    //     // bg.style.background = "grey";

    //     //clean 
    //     for(hid = 0; hid < title.length; hid++){
    //         if(hid != num){            
    //             var hidth = hid + 1;
    //             var hide = document.querySelector(".content:nth-of-type(" + hidth + ")");
    //             hide.style.display= "none";
    //         } 

    //     }

}