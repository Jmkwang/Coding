// 生成表格
function createTable(options)
{
    // 定义变量
    var table = '';
    
    // 定义被合并格子的列表
    var dot_list = createDotList(options.merge);

    console.log(dot_list);

    table += '<table border="1">';

    // 先遍历行再遍历列：完全就是因为网页的表格限制。
    // table > tr > td
    // 网页的表格对于 js 或者的其他的编程语言只是 html 文本代码
    // 文本拼接的方式，html有固定格式，html是有浏览器来解析并且显示
    // 输出行
    for (var row = 0; row < options.row; row++) {

        table += '<tr>';

        // 输出格子
        for (var col = 0; col < options.col; col++) {
            table += '<td>';
            table += row;
            table += '-';
            table += col;
            table += '</td>';
        }

        table += '</tr>';
    }

    table += '</table>';


    // 函数定义：一个或多个参数输入，一定会输出（得出）一个结果
    return table;
}



// 单独写一个函数来生成坐标点
// 生成坐标的目的是为了等会判断当前生成的格子是不是被合并的格子
function createDotList(merge)
{
    //　定义一个数组来保存坐标列表
    var dot_list = [];

    // merge 里面是数组
    for (var i = 0; i < merge.length; i++) {
        // console.log(merge[i])

        // 为了方便，把对象里面的参数提取成变量
        var r = merge[i].r;
        var c = merge[i].c;
        var rs = merge[i].rs;
        var cs = merge[i].cs;

        // console.log(r, c, rs, cs);

        // 计算位置生成坐标
        // 行-列
        
        // 合并列
        // r 和　c 已经有了一个起始坐标
        // r 1  c 1  rs 1  cs 2
        // r 1  c 1 + 0  => 1-1
        // r 1  c 1 + 1  => 1-2

        //　合并行
        // r 和　c 已经有了一个起始坐标
        // r: 2, c: 1, rs: 2, cs: 1
        // r: 2 + 0, c: 1 => 2-1
        // r: 2 + 1, c: 1 => 3-1

        // 合并行同时也合并列
        // r 和　c 已经有了一个起始坐标
        // r: 3, c: 3, rs: 2, cs: 2
        // r: 3 + 0, c: 3 + 0 => 3-3
        // r: 3 + 0, c: 3 + 1 => 3-4
        // r: 3 + 1, c: 3 + 0 => 4-3
        // r: 3 + 1, c: 3 + 1 => 4-4


        // 循环行
        for (var dr = 0; dr < rs; dr++) {
            // console.log(dr + r);

            // 循环列
            for (var dc = 0; dc < cs; dc++) {
                var dot = (dr + r) + '-' + (dc + c);

                // 添加一个数据到数组中
                // 解释：https://blog.wz52.cn/helpYouSearch/search.html?goto=aHR0cHM6Ly93d3cuYmFpZHUuY29tL3M/d2Q9anMlMjAlRTYlOTUlQjAlRTclQkIlODQlRTclOUElODQlMjBwdXNoKCklMjAlRTYlOUMlODklRTQlQkIlODAlRTQlQjklODglRTclOTQlQTg=&query=js%20%E6%95%B0%E7%BB%84%E7%9A%84%20push()%20%E6%9C%89%E4%BB%80%E4%B9%88%E7%94%A8
                dot_list.push(dot);
            }
        }

    }

    return dot_list;
}

// console.log(options);

// 连续输出同样的内容则会收缩在一行内， 在行首显示一个数字输出了几次。
// 行号与内容都相同则认为是同一个内容
// console.log(options.row);
// console.log(options.col);
