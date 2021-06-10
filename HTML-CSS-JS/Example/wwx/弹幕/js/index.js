window.onload = function () {
    // 获取内容区
    var bullet_chat_content = document.querySelectorAll("div.bullet_chat_content")[0];
    var bullet_chat = document.querySelectorAll("div.bullet_chat")[0];


    // 获取输入框
    var input = document.querySelectorAll("input.input")[0];


    // 获取发送按钮
    var button = document.querySelectorAll("input.button")[0];


    button.onclick = function () {
        // console.log("button")

        // 创建弹幕节点
        var span = document.createElement('span');

        //判断输入框里面是否有东西
        if(input.value == ""){
            return;
        }

        // 创建弹幕文本
        var span_text = document.createTextNode(input.value);

        // 将文本节点添加到属性节点里面
        span.appendChild(span_text);

        // 将属性节点添加到内容框里面
        bullet_chat.appendChild(span);

        // console.log(span.offsetWidth)

        // 随机span的位置
        span.style.top = Math.round(Math.random() * 200) + 'px';
        span.style.right = -span.offsetWidth + 'px';


        // 将弹幕从右到左移动
        setTimeout(() => {
            span.style.right = 800 + 'px';

        }, 50);

        // 清除输入框里面的东西
        input.value = ""
    }
}