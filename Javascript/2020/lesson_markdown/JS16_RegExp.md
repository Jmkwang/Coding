# Javascript 正则表达式

	规则验证
		约束用户，按照开发者的意愿填写数据。比如，我的表单填写的应该是数量，我并不希望用户恶意或者失误填写了错误数据。

	表单数据规则验证:
		* 为什么要验证规则？
			防止用户提交恶意数据(就好比我们平时避免使用关键字的道理)
			提高服务器性能(没有必要为无意义的提交而浪费资源)
			提高用户体验度(一边写，一边提示，多爽啊)

# A. 正则表达式
	正则表达式是跨语言的，通用的

# B. 什么是正则表达式？
   1. 概念
	   通过一套特定的规则，对字符串进行分割，匹配，查找，替换等操作！

   2. 主要作用：
	   1. 各个文本编辑器的查找，替换功能，就是使用正则表达式
	   2. 匹配，从海量字符串中析取信息
	   3. 替换，使用新文本替换文本

   3. 正则是我：
	   /^[0-9a-zA-Z_-]+@[0-9a-zA-Z_-]+(\.[0-9a-zA-Z_-]+){0,3}$/

   4. 与正则相似的事物？
   		1. 女人的心
		2. 道士的符
		3. 医生的字

# C. 创建 RegExp 对象的语法：
    1. 直接量语法:
		`var regExp = /pattern/attributes`

    2. 创建 RegExp 对象:
		`var regExp = new RegExp(pattern, attributes);`

   		参数 pattern 是一个字符串，指定了正则表达式的模式或其他正则表达式。
		参数 attributes 是一个可选的字符串，包含属性 "g"、"i" 和 "m"，分别用于指定全局匹配、区分大小写的匹配和多行匹配。

# 语法规则

# D. 定界符
	* 定界符就是用于标记某段字符串是"正则表达式"，如: /xx/

# E. 认识原子
	* 原子指在化学反应中不可分割，在JS表示最小组成单位。

	1. 普通字符作为原子
		原子: 最小组成部分
	    a~z,A-Z,0~9

	2. 非打印字符作为原子
		\n	查找换行符。
		\r	查找回车符。
		\t	查找制表符。

	3. 通用字符类型作为原子
		\w	匹配任意一个数字、字母或下画线，等价于[0-9a-zA-Z_]
		\W	非...

		\d	匹配数字，等价于[0-9]。
		\D	匹配非数字字符。

		\s	匹配空白字符。
		\S	匹配非空白字符。

	4. 特殊字符作为原子：
	   \xdd	查找以十六进制数 dd 规定的字符。
	   \uxxxx	查找以十六进制数 xxxx 规定的 Unicode 字符。
	   关键字符 \. \* \? \+ \[ \] \- \$ \^

	5. 字符串边界：
	   n$	匹配任何结尾为 n 的字符串。
	   ^n	匹配任何开头为 n 的字符串。

	6. 原子表：用于查找某个范围内的字符。
		   [abc]	查找方括号之间的任何字符。
		   [^abc]	查找任何不在方括号之间的字符。
		   [0-9]	查找任何从 0 至 9 的数字。
		   [a-z]	查找任何从小写 a 到小写 z 的字符。
		   [A-z]	查找任何从大写 A 到小写 z 的字符。
		   (red|blue|green)	查找任何指定的选项。

	8. 重复匹配：
	   {}:
		   n{X}	匹配包含 X 个 n 的序列的字符串。
		   n{X,Y}	匹配包含 X 至 Y 个 n 的序列的字符串。
		   n{X,}	匹配包含至少 X 个 n 的序列的字符串。

	   + . * ?:
		   .	查找单个字符，除了换行和行结束符。
		   n+   1个或多个
		   n*	可以有，可以没有，可以多个 ， 1,0,n
		   n?	1或0,匹配任何包含零个或一个 n 的字符串。

	9. 修饰符：
	   i	执行对大小写不敏感的匹配。
	   g	执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。

# F. RegExp 对象方法
	1. RegExpObject.test(string)
		含义: 检索字符串中的指定值。返回值是 true 或 false
	2. RegExpObject.exec(string)
		含义: 方法检索字符串中的指定值。返回值是被找到的值，并确定其位置。
		如果没有发现匹配，则返回 null

# G. 支持正则表达式的 String 对象的方法
	1. stringObject.search(regexp)
		含义: 检索与正则表达式相匹配的值。
		stringObject 中第一个与 regexp 相匹配的子串的起始位置。
		注释：如果没有找到任何匹配的子串，则返回 -1。

	2. stringObject.match(regexp) | stringObject.match(searchvalue)
		含义: 找到一个或多个正则表 达式的匹配。
		该方法类似 indexOf() 和 lastIndexOf()，但是它返回指定的值，而不是字符串的位置。

	3. stringObject.replace(regexp/substr,replacement)
		含义: 替换与正则表达式匹配的子串。

# H. 实例：几个常用正则
   	1. 手机

   	2. 字母+数字

	3. 英文账号

   	4. 匹配中文
		\u4e00-\u9fa5

	5. 中英文账号

   	6. 邮箱

	7. 匹配a标签 或者 url


<!--  -->
