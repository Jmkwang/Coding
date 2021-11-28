## ''' 已知文件open.txt的存放路径为python文件的目录（如:d:\python），
# 里面有文本内容：努力、加油，明天会更好！请完成以下习题：
# 1、一次性读取open.txt的内容
# 2、将“hello world”追加写入到open.txt中
# 3、再次一次性读取open.txt的内容

def a():
    m1=open("open.txt","r")
    s=m1.read()
    print(s)
    m1.close()
def b():
    m2=open("open.txt","w")
    m2.write("hello world")
    m2.close()
def c():
    m3 = open("open.txt", "r")
    s = m3.read()
    print(s)
    m3.close()

try:
    a()
    b()
    c()
except Exception as err:
    print(err)