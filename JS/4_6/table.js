// 生成表格
function generateTable(options)
{
    // 用于保存表格
    var table = '';

    table += '<table border="1">';

    // 输出行
    for (var row = 0; row < options.row; row++) {
        table += '<tr>';

        // 输出列
        for (var col = 0; col < options.col; col++) {

            if (isMergeStartDot(options.merge, row, col)) {
                
                // 获取合并大小
                var dot = getMergeRange(options.merge, row, col);

                var rs = 'rowspan="' + dot.rs + '"';
                var cs = 'colspan="' + dot.cs + '"';

                table += '<td ' + rs + ' ' + cs + '>';
                table += '</td>';
            } else {
                table += '<td>';
                table += row;
                table += ',';
                table += col;
                table += '</td>';
            }
            
        }

        table += '</tr>';
    }

    table += '</table>';

    // 返回表格
    return table;
}


// 判断当前行列是否是合并的起始单元格
function isMergeStartDot(merge, row, col)
{
    // console.log(merge, row, col);

    // 已知：数组名[] 可以取出数组的内容
    // 数组是一个有序列表

    for (var i = 0; i < merge.length; i++) {

        if (merge[i].r == row && merge[i].c == col) {
            return true;
        }
    }

    return false;
}


// 获取指定格子的合并大小
function getMergeRange(merge, row, col)
{
    // console.log(merge, row, col);
    // 遍历：按照特定路径（路线）去读取一遍
    for (var i = 0; i < merge.length; i++) {
        
        // 从数组中将内容拿出来放到一个变量里面
        // 方便使用
        var r = merge[i].r;
        var c = merge[i].c;
        var rs = merge[i].rs;
        var cs = merge[i].cs;

        if (r == row && c == col) {
            return {
                rs: rs,
                cs: cs,
            }
        }
    }

    return {
        rs: 0,
        cs: 0,
    };
}