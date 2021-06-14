window.onload = function(){

    var title = document.getElementsByClassName("cate");

    title[0].onclick = function click(){
        aftTap(0);
    }

    title[1].onclick = function click(){
        aftTap(1);
    }

    title[2].onclick = function click(){        
        aftTap(2);
    }

    title[3].onclick = function click(){       
        aftTap(3);
    }

    for(var i = 0; i < title.length; i++){
        title[i].num = i;
    }

    function aftTap(num){
        console.log(title,num);

        //display:block
        nth = num + 1;
        var show = document.querySelector(".content:nth-of-type(" + nth + ")");
        show.style.display= "block";
        // var bg = document.querySelector(".content:target:nth-of-type(" + nth + ")");
        // bg.style.background = "grey";

        //clean 
        for(hid = 0; hid < title.length; hid++){
            if(hid != num){            
                var hidth = hid + 1;
                var hide = document.querySelector(".content:nth-of-type(" + hidth + ")");
                hide.style.display= "none";
            } 

        }
    
    }

    

}

