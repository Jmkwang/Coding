#题目要求：s=a+aa+aaa+aaaa+aa...a的值,其中a是一个数字。例如2+22+222+2222+22222(此时共有5个数相加)，几个数相加由键盘输入
# 2：2+2*10**0
# 22：2+2*10**1
# 222： 22+2*10**2
# 2222：222+2*10**3
n=int(input("请输入一个数字："))
m=int(input("请输入几个数相加："))
a=0
b=0 #
for i in range(m):
       a=10*a+n
       b=b+a
       if i<m-1:
           print(a,end="+")
       else:
           print(a,end="=")
print(b)