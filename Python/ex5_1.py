##题目要求： 已知文件open.txt的存放路径为python的根目录（如:d:\python）， 请完成以下习题：
# 1.用只读方式打开文件open.txt，打印文件的访问模式；
# 2.关闭文件open.txt，判断文件是否关闭；
# 3.用写入的方式打开文件open.txt,再次打印文件的访问模式；
# 4.判断文件是否关闭
# 5、在文件open.txt中写入“努力、加油，明天会更好！”
# 6、关闭文件open.txt
a=open("open.txt","r")
print("permission:",a.mode)
a.close()
print("close or not",a.closed)
a=open("open.txt","w")
print("permission:",a.mode)
print("close or not",a.closed)
a.write("努力、加油，明天会更好！")
a.close()