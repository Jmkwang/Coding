# JavaScript Date 对象用于处理日期和时间。

	一月: January
	二月: February
	三月: March
	四月: April
	五月: May
	六月: June
	七月: July
	八月: August
	九月: September
	十月: October
	十一月: November
	十二月: December

	周一: Sunday
	周二: Sunday
	周三: Sunday
	周四: Sunday
	周五: Sunday
	周六: Sunday
	周日: Sunday

# 时间对象 Date()
	1. 实例化
		new Date();

	2. 几种实例化格式
		* 使用数字格式设置月份要注意，JS的月份是从 0~11
		1. new Date()
		2. new Date(yyyy,mth,dd)
	    3. new Date(yyyy,mth,dd,hh,mm,ss)
	    4. new Date("mth dd,yyy");
	    5. new Date("month dd,yyyy hh:mm:ss")
	    6. new Date("2017-08-01T00:00:00+08:00")
			世界协调时间(UTC)的格式
	    7. new Date(ms);
			时间戳


# A. 获取时间
	1. DateObject.getFullYear()
		以四位数字返回年份。
	2. DateObject.getMonth()
		返回月份 (0 ~ 11)。
	3. DateObject.getDate()
		返回一个月中的某一天 (1 ~ 31)。
	4. DateObject.getHours()
		小时 (0 ~ 23)。
	5. DateObject.getMinutes()
		分钟 (0 ~ 59)。
	6. DateObject.getSeconds()
		秒数 (0 ~ 59)。
	7. DateObject.getDay()
		返回一周中的某一天 (0 ~ 6)。
	8. DateObject.getTime()
		返回 1970 年 1 月 1 日至今的毫秒数。


# B. 设置
	1. DateObject.setFullYear()
		设置 Date 对象中的年份（四位数字）。
	2. DateObject.setMonth()
		设置 Date 对象中月份 (0 ~ 11)。
	3. DateObject.setDate()
		设置 Date 对象中月的某一天 (1 ~ 31)。
	4. DateObject.setHours()
		设置 Date 对象中的小时 (0 ~ 23)。
	5. DateObject.setMinutes()
		设置 Date 对象中的分钟 (0 ~ 59)。
	6. DateObject.setSeconds()
		设置 Date 对象中的秒钟 (0 ~ 59)。
	7. DateObject.setTime()
		以毫秒设置 Date 对象。

# 重点
	年月日，时分秒




	<!--  -->
