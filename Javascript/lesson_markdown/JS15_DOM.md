# A. DOM 文档对象模型 （Document Object Model）
	JS三大组成部分:
		1. ECMAScript
			语法，数据类型，语句，关键字，运算符，等等基本语法规则

		2. BOM(Browser Ojbect Model,浏览器对象模型)
			* 主要提供和浏览器交互的能力
				如:调用打印，弹出警告窗口等

		3. DOM(Document Object Model, 文档对象模型)
			* 提供访问和操作网页内容的能力
				如: 添加新标签并插入到页面

	DOM核心内容:
		事件: 捕捉用户的行为操作
		节点: 是关于如何查找、修改、添加或删除 HTML 元素的标准。

# B. DOM树
                    文档(document)
                          |
                    根元素(<html>)
                          |
         _____________________________________
         |                                   |
    元素(<head>)                         元素(<body>)
         |                                   |
    ___________                      _____________________
         |                           |       |           |
      元素<title>     属性(href)--- 元素<a>   元素<b>   元素<h1>
         |                           |       |           |
      文本："文本标题"                 "百度"  "青瓜"    "其它文本"

# C. 摸清DOM 节点类型
	* HTML DOM 标准 : 所有内容都是节点，一切皆节点

	1. 整个文档是一个文档节点
	2. 每个 HTML 元素是元素节点
	3. HTML 元素内的文本是文本节点
	4. 每个 HTML 属性是属性节点
	5. 注释是注释节点

# D. 节点定位
	* Document对象,表示整个HTML文档

	1. document.getElementById()
	2. document.getElementsByTagName()
	3. document.getElementsByClassName()

# E. Document对象其他属性

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
			返回载入当前文档的文档的 URL(上一路径)

# F. 根节点
	* 特点: 唯一，无需查找
	document.documentElement --> html
	document.body  			 --> body

# G. 节点树总结
	1. 节点树中的节点彼此拥有层级关系。
	2. 在节点树中，顶端节点被称为根 <html>
	3. 每个节点都有父节点、除了根（它没有父节点）
	4. 一个节点可拥有任意数量的子节点(可以有N个儿子)
	5. 同胞是拥有相同父节点的节点(兄弟节点)

# A. DOM对象的常用属性
	1. id 				返回ID名
	2. className 		返回类名
	3. title  			返回描述标题
	4. innerHTML 		标签之间的内容

	5. tagName 			返回元素的标签名

# B. DOM对象的常用属性 -- 查找节点(家族式查找)
	1. firstChild			大儿子
	2. lastChild 			么儿子
		3. childNodes 			所有子节点
	4. children 			所有子元素节点
	5. parentNode 			父节点
	6. nextSibling 			下一个兄弟
	7. previousSibling 		上一个兄弟

	8. element.attributes 	属性的集合

# C. DOM方法(创建、添加、修改、删除、克隆)
	1. 创建节点:动态创建元素
		格式：
			1. document.createElement('tag')         // 重要

	2. 添加节点
		添加到最后：
			parent.appendChild( object son )
		添加到position之前：
			parent.insertBefore(object son , position )

		添加节点的两种情况要分清：
			1. 添加动态创建的节点

			2. 添加找来的节点
				剪切效果

	3. 替换节点
		替换元素中的子节点
			parent.replaceChild(newnode,oldnode);

	4. 删除子节点
		格式:parent.removeChild(object son);

		如何删除自己？
			parent.parentNode.removeChild(object parent);

	5. 克隆节点:复制节点
		克隆自身(自己)：
			obj.cloneNode()
		克隆自身+子节点(一户口)：
			obj.cloneNode( true )		

# D. 属性节点
	1. 获取: obj.getAttribute(key)
	2. 设置: obj.setAttribute(key, val)

		设置标准属性: 可见，可用
			obj.title = '啦啦啦！德玛西亚';

		设置自定义属性: 不可见，可用
			obj.index = 100;

# E. 节点信息
	1. nodeName（节点名称）
		1. 元素节点的 nodeName 是标签名称
		2. 属性节点的 nodeName 是属性名称
		3. 文本节点的 nodeName 永远是 #text
		4. 文档节点的 nodeName 永远是 #document

	2. nodeValue（节点值）
		1. 对于文本节点，nodeValue 属性包含文本。
		2. 对于属性节点，nodeValue 属性包含属性值。
		3. nodeValue 属性对于文档节点和元素节点是不可用的

	3. nodeType（节点类型）
		nodeType 属性可返回节点的类型。
		元素类型 	节点类型
		元素 			1
		属性 			2
		文本 			3
		注释 			8
		文档 			9

# F. DOM对象的常用属性
	1. offset
		offsetWidth 		包含边框和内边距
		offsetHeight 		包含边框和内边距
		offsetTop 			上边距
		offsetLeft 			左边距

	2. client
		clientWidth 		包含内边距，不包含边框
		clientHeight
		clientTop 			上边框
		clientLeft 			左边框

	3. scroll
		scrollWidth 		整个元素的宽度+滚动条
		scrollHeight 		整个元素的高度+滚动条
		scrollTop 			纵向滚动条位置（可读可写）
		scrollLeft 			横向滚动条位置（可读可写）

	4. 窗口宽高
		document.documentElement.clientWdith
		document.documentElement.clientHeight

	5. 窗口滚动条
		document.documentElement.scrollTop
		document.body.scrollTop

		注意:
			兼容性？
			var dst =  document.body.scrollTop || document.documentElement.scrollTop;

# G. 获取外部样式
	1. 获取行内样式
		element.style.xxx
			可读可写
	2. 获取计算后的样式
		非IE:
			var style = window.getComputedStyle("元素", "伪类");
			或者 document.defaultView.getComputedStyle(obj);
			特点：
				最终使用的CSS属性值，即经过计算后的值
				只读属性
		IE:
			obj.currentStyle

	3. 兼容性问题解决



# H. DOM对象的其他方法(自己动手)
	1. hasAttribute()
		如果拥有指定属性，返回true
	2. normalize()
		将相邻的文本节点合并，且移除空的文本节点
	3. removeAttribute('attrName');
		删除属性节点

<!--  -->
