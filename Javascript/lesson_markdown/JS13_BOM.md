
# BOM(browser object model) 浏览器对象模型

	BOM对象是与浏览器进行交互的对象
	BOM的核心对象就是window

# A. window 对象
	window对象是BOM的顶层(核心)对象，所有对象都是通过它延伸出来的。
		Document 	
		Navigator
		Screen
		History
		Location

# B. window的属性
	top
		项层窗口
	self
		self在函数中表示什么？
	this
		top在函数中表示什么？
	closed
		返回窗口是否已被关闭

# C. 宿主环境的 this
	* 宿主环境，JS所嵌入的环境，就是浏览器

	1. 默认情况下，this指向了一个内置对象 window 对象
		this

	2. window 对象
		1. JS中一个内置对象
		2. 我们所有使用的全局变量，全局函数，都是window的子元素
		3. 我们定义的变量就是window对象的属性，函数就是window对象的方法！
		4. 我们本身处于的全局环境，就是在window对象内

	3. 总结:
		1. window 是一个内置对象
		2. this 代表的是对象，表示的是自己，指向了 window 对象
		3. window === this


# D. window的常用方法
	1. alert()
		显示带有一段消息和一个确认按钮的警告框
	2. confirm()
		显示带有一段消息以及确认按钮和取消按钮的对话框
	3. open()
		打开一个新的浏览器窗口或查找一个已命名的窗口。
		window.open('','son','width=400,height=400');

	4. setInterval()
		周期性定时器
	5. clearInterval()
		清除周期性定时器
	6. setTimeout()
		一次性定时器
	7. clearTimeout()
		清除一次性定时器


# E. 较少使用(了解即可，某些只能在IE下使用)
	1. close()
		关闭浏览器窗口

	2. resizeTo()
		把窗口的大小调整到指定的宽度和高度。
		window.resizeTo(500,400);
	3. resizeBy()
		按照指定的像素调整窗口的大小。
		window.resizeBy(10,10);
	4. moveBy()
		可相对窗口的当前坐标把它移动指定的像素。
		window.moveBy(10,10);
	5. moveTo()
		把窗口的左上角移动到一个指定的坐标。
		window.moveTo(100,100);

	* 只有IE生效

	* 总结:
		由于浏览器的差异，各个浏览器都有比较大的差异，导致有比较严重的兼容性问题，相同的属性在不同的浏览器会有不同的效果，甚至没有效果。
		BOM 的某些属性已经被淘汰或者不再被使用，这是历史遗留的问题，我们无需理会！

# F. Navigator: 包含有关浏览器的信息

	navigator.appVersion;
		返回浏览器的平台和版本信息。
	navigator.platform;
		返回运行浏览器的操作系统平台。
	navigator.userAgent;
		声明了浏览器用于 HTTP 请求的用户代理头的值

# G. Screen: 包含有关客户端显示屏幕的信息
	screen.availHeight
		返回显示屏幕的高度
	screen.availWidth
		返回显示屏幕的宽度
	screen.height
		返回显示屏幕的高度。
		除 Windows 任务栏之外
	screen.width
		返回显示屏幕的宽度。
		除 Windows 任务栏之外

# H. History: 包含用户（在浏览器窗口中）访问过的 URL
	history.forward()
		历史列表中的下一个 URL
	history.back()
		历史列表中的前一个 URL（如果存在）。
	history.go(number)
		历史列表中的某个具体的页面

# I. Location: 对象包含有关当前 URL 的信息
	属性：
		location.hostname;
		location.href;
		location.pathname;
		location.search;
	方法：
		assign()
			加载新的文档
			location.assign('http://www.baidu.com');

# Document: Document对象就是HTML文档
	1. 集合：
		all[]
			提供对文档中所有 HTML 元素的访问
		anchors[]
			a链接的集合
		forms[]
			表单的集合
		images[]
			图片的集合

	2. 属性：
		document.domain;
			返回当前文档的域名
		document.title;
			返回当前文档的标题
		document.referrer;
			返回载入当前文档的文档的 URL（上一路径）




	3. 方法：
		document.getElementById();
			通过ID找对象


		document.getElementsByTagName();
			通过标签名找对象


		document.write();
			向文档写HTML

<!--  -->
