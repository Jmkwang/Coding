# JavaScript 事件 Events

# A. 事件
	描述: 事件，其实就是浏览器捕捉用户的行为操作

# B. 如何绑定事件？
	1. 在元素上添加事件属性

	2. 找对象的方式

# C. 有哪些事件？
	文档事件，图片事件，鼠标事件，键盘事件，表单事件，其他事件...

# D. 文档事件
	1. onload: 文档加载成功
		回顾：JS执行顺序
			window.onload
		问题：window.onload 重复出现？
			后面覆盖前面

	2. onunload: 文档重新加载
		有兼容性问题，别用！
			IE8:    
				刷新页面会触发，关闭浏览器不会触发
			FireFox:
				刷新页面会触发，关闭浏览器不会触发
			Opera:
				不能用，刷新页面没有触发，关闭也没有触发
			Google:
				刷新页面不会触发，关闭浏览器触发了

# E. 图片事件
	1. onload
		加载成功
	2. onerror
		加载错误

# F. 鼠标事件
	1. onclick			单击
	2. ondblclick		双击
	3. onmousedown 		按下
	4. onmouseup 		弹起
	5. onmousemove 		鼠标移动
	6. onmouseover 		经过
	7. onmouseout 		离开
		8. onmouseenter 	
			onmouseenter 事件类似于 onmouseover 事件，
			唯一的区别是 onmouseenter 事件不支持冒泡 。
		9. onmouseleave
			onmouseleave 事件类似于 onmouseout 事件，
			唯一的区别是 onmouseleave 事件不支持冒泡
	10. oncontextmenu 	在用户点击鼠标右键打开菜单时触发

# G. 事件对象是什么鬼?
	描述: 事件对象是用于记录鼠标或键盘的状态信息
	作用:
		1. 你点击时鼠标的位置？
		2. 按键时，具体按的哪个键？
	重要：
		* 事件对象是随着事件产生的

# H. 如何获取事件对象？
	event
		事件对象

	IE下的事件对象
		window.event

# I. 事件对象的相关属性(鼠标 / 键盘)

	鼠标 / 键盘属性:
	1. event.clientX, event.clientY
		返回当事件被触发时，鼠标指针的水平坐标和垂直坐标

		2. event.offsetX, event.offsetY
        	发生事件的地点在事件源元素的坐标系统中的 x 坐标和 y 坐标。(就是自身的左上角)

	3. event.keyCode
		键盘编码

	4. event.cancelBubble
		阻止事件冒泡(IE支持, 不符合W3C标准)

	5. 标准 Event 方法:
		* event.stopPropagation() 	
			不再派发事件。阻止事件冒泡(符合W3C标准)

# J. 键盘事件
	1. onkeydown 	按下
	2. onkeyup 		弹起
	3. onkeypress 	按一次


# K. 其它事件
	1. onscroll 	滚动条
		element.onscroll
		window.onscroll
	2. onresize 	调整窗口大小

# L. 表单事件
	1. onblur 		元素失去焦点时触发
	2. onfocus 		元素获取焦点时触发
	3. oninput 		元素获取用户输入时触发
		注意：IE8不兼容
		实例：实时统计字符数量
	4. onchange
		该事件在表单元素的内容改变时触发( <input>,<select>, 和 <textarea>)

	5. onsubmit		表单提交
	6. onreset		表单重置
		注意：
			onsubmit, onreset 是为表单绑定的，而不是某个按钮
		取消默认行为:
			return false

		<!--  -->
