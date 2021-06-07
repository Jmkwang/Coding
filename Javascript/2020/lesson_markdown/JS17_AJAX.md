# Javascript AJAX
    英文: Asynchronous Javascript And XML
    简写: AJAX(异步无刷新技术)

    描述:
	   通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。传统的网页（不使用 AJAX）如果需要更新内容，必须重载整个网页页面。

    作用:
       	1. 异步与服务器通信
       		不需要打断用户的操作
       		减少不必要的数据传输、时间及降低网络上数据流量
       	2. 无刷新更新数据
       	3. 按需请求
            AJAX 并不适合大量的数据交互
            建议: 保持小量传输


# 实现步骤
    1. 实例化对象
        `var ajax = new XMLHttpRequest();`

    2. 建立连接
        * 调用open()方法并不会真正发送请求，而只是启动一个请求准备发送

        ajax.open(method,url,async)

            method: 请求的类型；GET 或 POST
            url: 文件在服务器上的位置
            async: true(异步) 或 false(同步)

    3. 发送请求
        ajax.send([string])
        string: string 参数仅用于 POST 请求

    4. 准备事件
    	ajax.onreadystatechange
    		每当 readyState 改变时，就会触发 onreadystatechange 事件。

    	监听状态
    		readyState
    			0: 请求未初始化
    			1: 服务器连接已建立
    			2: 请求已接收
    			3: 请求处理中
    			4: 请求已完成，且响应已就绪
    		status
    			200: "OK"
    			404: 未找到页面
    			http请求状态码
    				2xx - 成功
    				304
    					状态代码为304表示请求的资源并没有被修改，可以直接使用浏览器缓存的数据
    				4xx - 错误

    5. 响应
    	响应主体内容会保存到 ajax.responseText 中


# 两个参数
    ajax.open(method,url,async)
		1. async: 是否启用异步
			true
				表示异步,发生请求后，无需等到服务器执行完毕，可以继续执行当前代码
			false
				表示同步,发生请求后，要等待服务器执行完毕才继续执行当前代码。
		2. method: 设置请求方式
			1. post
                * 告诉浏览器，使用 urlencoded 格式发送数据
				ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");

                * urlencoded 格式
				ajax.send('key1=val1&key2=val2');

			2. get
                * get 方式是通常URL将数据传递

                ajax.send();

		3. url: 请求地址

    实例
    	1. 无刷新更新
    	2. 表单验证
        3. 百度翻译实例
            http://api.fanyi.baidu.com/api/trans/product/index

    ajax函数
    	自定义成函数，方便不同请求执行不同操作


# JSON
    JSON ：JavaScript 对象表示法（JavaScript Object Notation）
    JSON 是轻量级的文本数据交换格式
    JSON采用完全独立于语言的文本格式
    大部分现代计算机语言都以某种形式支持它们

# 语法规则
    就是 JS 直接量对象

# JSON方法
	JSON.stringify(obj);
		将对象转换为字符串

	JSON.parse(string);
		注意
			内容只能使用双引号
		将字符串转换为对象

	eval()
		eval (txt);
			只能转换PHP的索引数组
		eval ("(" + txt + ")");
			均可

    PHP函数
    	json_encode()
    		编码
    	json_decode( string $json , bool $assoc)
    		解码
