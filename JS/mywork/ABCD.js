function alphabet (sec){
    var cb = ""
    for (var i = 0; i < sec.num; i += 1){
        cb += sec.star
    }
    return cb
}


function line(sec){
    var cb = ""
    for (var i = 0; i < sec.length; i += 1){
        cb += alphabet(sec[i])
    }
    return cb
}
//ll                     i  vari    
//1   4    *                      ||                                                       
//2   3   * *            0    1   ||                   
//3   2  *   *           1    2   ||               
//4   1 *     *          2    3   ||              
//5    *_______*                  ||             
//6   *         *                 ||                     
//7  *           *                ||                    
//8 *             *               ||                       
//9*     17        *              ||         
function A(midlineposition,wholelinenum){  //(5,9) (6,11)
    //consider A is a hollow triangle which bottom edge was push up into middle
    var benum = wholelinenum * 2 - 1
    //bottom edge number(include two *)
    var topspace = (benum - 1)/2
    //first line blank
    console.log(line([{num: topspace, star: " "},{num: 1, star: "*"}]))
    for (var i = 0; i < wholelinenum - 1; i += 1){
         //make a cycle
        var vari = i + 1
         // a special variable
        var outblank = topspace - vari
         //blank outside triangle
        var innerblank = (vari + 1 ) * 2 - 3
         // calculate blank inside triangle
        if (vari == midlineposition - 1){
             console.log(line([{num: outblank, star: " "},{num: 1, star: "*"},{num: innerblank, star: "*"},{num: 1, star: "*"}]))
             continue
            }
        console.log(line([{num: outblank, star: " "},{num: 1, star: "*"},{num: innerblank, star: " "},{num: 1, star: "*"}]))
         // the inner blank ammount equal to the star should be filled in.     
    }
}


//*********                       ******        *****        ******                          
//*        *                      *     *       *    *       *     *
//*        *                      *     *       *    *       ******
//*        *                      ******        *****        *     *
//*********                       *     *       *    *       *     *
//*        *                      *     *       *    *       ******
//*        *                      ******        *    *
//*        *                                    ***** 
//*********  

function B(length,topsecnum,downsecnum){   
      //three lines' length/height of two section(up n down)
    console.log(line([{num: length, star: "*"}]))
    for (var i = 0; i < topsecnum; i +=1){
        console.log(line([{num: 1, star: "*"},{num: length, star: " "},{num: 1, star: "*"}]))
    }
    console.log(line([{num: length, star: "*"}]))
    for (var i = 0; i < downsecnum; i +=1){
        console.log(line([{num: 1, star: "*"},{num: length, star: " "},{num: 1, star: "*"}]))
    }
    console.log(line([{num: length, star: "*"}]))
}


// *********                                                       
//*             
//*                     
//*                               
//*                
//*                                               
//*                                           
//*                                        
// *********    

function C(length,height){
    console.log(line([{num: length, star: "*"}]))
    for (i = 0; i < height - 2; i += 1){
        console.log(line([{num: 1, star: "*"}]))
    }
    console.log(line([{num: length, star: "*"}]))
}


//*********                                                                     
//*        *
//*         *                
//*         *                       
//*         *              
//*         *                                  
//*         *                                
//*        *                                   
//*********

function D(length,height){
    console.log(line([{num: length, star: "*"}]))
    console.log(line([{num: 1, star: "*"},{num: length, star: " "},{num: 1, star: "*"}]))
    for (i = 0; i < height - 2; i += 1){
        console.log(line([{num: 1, star: "*"},{num: length + 1, star: " "},{num: 1, star: "*"}])) 
    }
    console.log(line([{num: 1, star: "*"},{num: length, star: " "},{num: 1, star: "*"}]))
    console.log(line([{num: length, star: "*"}]))
}


// *     *    *  *    *  *
// *     *    ****    *  *
// *     *    *  *    ****
// *******    *  *    *  *   
// *     *            *  *
// *     *            *  *
// *     *
function H(length,height){
    var space = length - 2;

    if (height % 2==0){
        var midplace = (height - 1)/2;
    } else {
        midplace = height /2
    };

    
    for (var count = 1;count < midplace; count++) {
    console.log(line([{num: 1, star: "*"},{num: space, star: " "},{num: 1, star: "*"}]))
    };

    //console.log(count);

    if(count = midplace){
        console.log(line([{num: length, star: "*"}]))
    };

    //console.log(count);
 
    for (var last = height-midplace; last <= height; last++) {
        console.log(line([{num: 1, star: "*"},{num: space, star: " "},{num: 1, star: "*"}]))
    };
};



// console.log("--------------------------------------")
// A(4,8)
// console.log("--------------------------------------")
// B(9,3,4)
// console.log("--------------------------------------")
// C(11,10)
// console.log("--------------------------------------")
// D(11,7)
console.log("--------------------------------------")
H(6,6)