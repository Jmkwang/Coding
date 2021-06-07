//得到多个相同字符组成的字符串--->封装段函数
function secfunc(part) {
        var str = ""
        for (var i = 0; i < part.num; i = i + 1) {
            str = str + part.char
        }
        return str
    }
    
    //封装三段组成的行函数
    function linefunc(partArr) {
        var str = ""
        for (var i = 0; i < partArr.length; i = i + 1) {
            str = str + secfunc(partArr[i])
        }
        return str
    }
    
    //封装一个实心长方形
     function rectangle(chang,kuan){
         for (var i = 0; i < kuan; i = i + 1){
             console.log(linefunc([{num:0,char:"*"},{num:chang,char:"*"},{num:0,char:"*"}]))
         }
     }
    
     //封装一个空心长方形
     function emptyrect(chang,kuan) {
         console.log(linefunc([{num:0,char:"*"},{num:chang,char:"*"},{num:0,char:"*"}]))
         for (var i = 0; i < kuan - 2; i = i + 1){
             console.log(linefunc([{num:1,char:"*"},{num:chang - 2,char:" "},{num:1,char:"*"}]))
         }
         console.log(linefunc([{num:0,char:"*"},{num:chang,char:"*"},{num:0,char:"*"}]))
     }
    

//实心三角形
//1   *
//2  ***
//3 *****
//4*******
    // function triangle(be) {
    //     var linenum = (be + 1) / 2
    //     for (var i = 0; i < linenum; i = i + 1) {
    //         var starnumber = 2 * i + 1
    //         var spacenum =(be - starnumber) / 2
    //         console.log(linefunc([{num:spacenum,char:" "},{num:starnumber,char:"*"},{num:spacenum,char:" "}]))
    //     }
    // }
      

//空心三角形    NO. B1 S  B2 S  blank1/2 star
//     *        1  5  1  
//    * *       2  4  1  1  1 
//   *   *      3  3  1  3  1
//  *     *     4  2  1  5  1
// *       *    5  1  1  7  1
//***********   6  0 11
//                     (11+1)/2=6
    // //第一行和最后一行和实行的一样，每一行两边的空格数量是一样的，空心三角形是由五段组成的，中间那段加上二就是实心三角形星星的数量
    // function emptytri(be) {
    //     var linenum = (be + 1) / 2
    //     for (var i = 0; i < linenum; i = i + 1) {
    //         var starnumber = 2 * i + 1
    //         var spacenum =(be - starnumber) / 2
    //         var insideblank = stargnumber - 2
    //         if (i == 0 || i == linenum - 1){
    //             console.log(linefunc([{num:spacenum,char:" "},{num:starnumber,char:"*"},{num:spacenum,char:" "}]))
    //             continue
    //         }
    //         console.log(linefunc([{num:spacenum,char:" "},{num:1,char:"*"},{num:insideblank,char:" "},{num:1,char:"*"},{num:spacenum,char:" "}]))
    //     }
    // }
    
//封装一个通用三角形函数
 function triangle(be,isKong,panright = 0,isFirst = true,isLast = true) {
     var linenum = (be + 1) / 2
     for (var i = 0; i < linenum; i = i + 1) {
         //数据验证
         //如果不打印第一行直接跳过
        if (!isFirst && i == 0) { 
             continue; 
         }
         //如果不打印最后一行直接跳过
         if (!isLast && i == linenum - 1) {
             continue;
         }

         var starnumber =  2 * i + 1        
         var emptynum =(be - starnumber) / 2 + panright
         var insideblank = starnumber - 2
         if (isKong && i != 0 && i != linenum - 1) {
             console.log(linefunc([{num:emptynum,char:" "},{num:1,char:"*"},{num:insideblank,char:" "},{num:1,char:"*"},{num:emptynum,char:" "}]))
             continue;
        }
         console.log(linefunc([{num:emptynum,char:" "},{num:starnumber,char:"*"},{num:emptynum,char:" "}])) 
     }
}
//梯形
//
//*************
//*           **
//*           * *
//*           *  *
//*           *   *
//******************
  function trapezoid(top,high,down,updown = true,towards = true) {
     console.log(linefunc([{num: top, char: "*"}]))
     for (var i = 0; i < high-2; i +=1) { 
      var midspace = top + i
      console.log(linefunc([{num: 1, char: "*"},{num: midspace, char: " "},{num: 1, char: "*"}]))
      continue
    }
    console.log(linefunc([{num:down, char: "*"}])) 
    }

//rectangle(10,6)
//console.log("--------------")
//emptyrect(11,6)
//console.log("--------------")
//triangle(11)
//console.log("--------------")
//emptytri(11)
//console.log("--------------")
//triangle(9,true)
//triangle(13,false)
console.log("--------------")
trapezoid(10,6,9)
