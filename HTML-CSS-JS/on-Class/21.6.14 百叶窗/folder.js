window.onload = function(){

    /* tab-title~content */
    var tab = document.getElementsByClassName("tab");
    var title = document.getElementsByClassName("title");
    var content = document.getElementsByClassName("content");

    // console.log(tab);
    // console.log(title);
    // console.log(content);

    title[0].onclick = function click(){
        dropBack(0);
    };
    
    title[1].onclick = function click(){
        dropBack(1);
    };

    title[2].onclick = function click(){
        dropBack(2);
    };
    
    title[3].onclick = function click(){
        dropBack(3);
    };

    for(var i = 0; i < title.length; i++){
        title[i].num = i;
    }


    function dropBack(num){
        //drop
        nth = (num + 1) * 2;
        var cttDrop = document.querySelector(".content:nth-of-type(" + nth + ")");
        // console.log(num,cttDrop);
        cttDrop.style.display = "block";

        //tap-other-back
        for(hid = 0; hid < title.length; hid++){
            if(hid != num){            
                var hidth = (hid + 1) * 2;
                var hide = document.querySelector(".content:nth-of-type(" + hidth + ")");
                hide.style.display= "none";          
            }
        }  
    }
}