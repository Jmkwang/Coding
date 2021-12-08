function shape (sec){
    var cb = ""
    for (var i = 0; i < sec.num; i += 1){
        cb += sec.star
    }
    return cb
}


function line(sec){
    var cb = ""
    for (var i = 0; i < sec.length; i += 1){
        cb += shape(sec[i])
    }
    return cb
}


//实心长方形
function filledrect(rownum,linenum){
    for (var i = 0;i < linenum;i += 1){
        console.log(line([{num: 0, star: ''},{num: rownum, star: '+'}]))
    }
}




//空心长方形
function emptyrect(rownum,linenum){
    console.log(line([{num: 0, star: ''},{num: rownum, star: '~'}]))
    for (var i = 0; i < linenum-2; i += 1){
        console.log(line([{num: 1, star: '~'},{num: rownum-2, star: ' '},{num: 1, star: '~'}]))
    }
    console.log(line([{num: 0, star: ''},{num: rownum, star: '~'}]))  
}




//实心三角形
//1   *
//2  ***
//3 *****
//4*******
function triangle(linenum){
    for (var i = 0; i < linenum; i += 1){
        var lines = i + 1
        var be = linenum * 2 - 1
        var starnum = lines * 2 - 1
        var blank = (be - starnum)/2
          console.log(line([{num: blank,star: " "},{num: starnum,star: "*"},{num: blank ,star: " "}]))
    }
}




//空心三角形    NO. B1 S  B2 S   i vari
//     *        1  5  1  
//    * *       2  4  1  1  1   0  1           
//   *   *      3  3  1  3  1   1  2
//  *     *     4  2  1  5  1   2  3
// *       *    5  1  1  7  1   3  4
//***********   6  0 11         4
//                     (11+1)/2=6
function hollowtri(linenum){
    var be = linenum * 2 - 1
    var topspace = (be - 1)/2
    console.log(line([{num: topspace, star: " "},{num: 1, star: "*"},{num: topspace, star: " "}]))
    for (var i = 0; i < linenum - 2; i += 1){
        var vari = i + 1
        var outspace = topspace - vari
        var innerspace = (vari + 1 ) * 2 - 3
        console.log(line([{num: outspace, star: " "},{num: 1, star: "*"},{num: innerspace, star: " "},{num: 1, star: "*"}]))
    }
    console.log(line([{num: 0, star: " "},{num: be, star: "*"},{num: 0, star: " "}]))
}

function A(hollowtrilinenum,abe){
        //hollow triangle line numbers n A's bottom edge length
        var tribe = hollowtrilinenum * 2 - 1
        //tribe=trianle bottom edge= hollow triangle line number *2 -1
        var wholetripanright = (abe - tribe) / 2
        //whole triangle pan right parameter (same parameter)
        var topspace = (tribe - 1) / 2
        //original space + pan right parameter
        console.log(line([{num: topspace + wholetripanright, star: " "},{num: 1, star: "*"}]))
        //print first line
        for (var i = 0; i < hollowtrilinenum - 2; i += 1){
            //cycle for the middle
            var vari = i + 1
            //add variable to match 
            var outspace = topspace - vari
            //outside blank calculation
            var innerspace = (vari + 1 ) * 2 - 3
            //innner blank calculation
            console.log(line([{num: outspace + wholetripanright, star: " "},{num: 1, star: "*"},{num: innerspace, star: " "},{num: 1, star: "*"}]))
        }   //print mid triangle 
        console.log(line([{num: wholetripanright, star: " "},{num: hollowtrilinenum * 2 - 1, star: "*"}]))
        //print last line of tri
}


console.log("-------------------------------------")
filledrect(7,5)
console.log("-------------------------------------")
emptyrect(9,3)
console.log("-------------------------------------")
triangle(6)
console.log("-------------------------------------")
hollowtri(6)
console.log("-------------------------------------")
A(5,17)


//shi xing cfx
var chang = 5;
var kuan = 6;
for(var Kcount = 0; Kcount < kuan; Kcount++){
    for(var Ccount = 0; Ccount < chang; Ccount++){
        document.write("*");
    }
    document.write("<br>")
}