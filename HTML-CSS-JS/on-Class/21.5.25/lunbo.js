
// ========= allset =========

window.onload = function () {
    var img = document.getElementById("imgShow");
    var i = 0;
    console.log(img);
   
    setInterval(function () {
        img.style.marginLeft = i + "%";   
        i -= 5;  
        if (i == -5 * 165) {  
            i = 0;    
        };
    }, 100)
}
