
var times = 0;

for (var plate = 0; plate <= 20; plate ++){
    for (var bowl = 0; bowl <= 33; bowl ++){
        var stick = 100 - plate - bowl;
        if (plate + bowl + stick == 100 && 5*plate + 3*bowl + stick/3 == 100){
            document.write("碟"+plate+"&nbsp"+"碗"+bowl+"&nbsp"+"筷子"+stick+"&nbsp"+"<br>");
            times += 1;
        }
        
    }
}
document.write(times+"ways.")