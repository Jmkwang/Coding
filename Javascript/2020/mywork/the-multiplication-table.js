
for (var row = 1; row <= 9; row++){
    for (var line = 1; line <= row; line++){
        var end= row*line;
        document.write(row+"x"+line+"="+end+"  ");
    }
    document.write("<br>");
};



for (var row = 9; row >=1; row--){
    for (var line = 1; line <= row; line++){
        var end= row*line;
        document.write(row+"x"+line+"="+end+"  ");
    }
    document.write("<br>");
};


for (var row = 1; row <= 9; row++){
    for (var line = 9; line <= row; line++){
        var end= row*line;
        document.write(line+"x"+row+"="+end+"  ");
    }
    document.write("<br>");
};