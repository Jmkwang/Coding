#定义一个函数实现计算累加，累加的初始值和终止值由用户在主函数中输入调用
a=int(input("start:"))
b=int(input("end:"))
def n(a,b):
    c=0
    for i in range(a,b+1):
        print(i,end="+")
        c=c+i
    return c
c=n(a,b)
print("\b=","\b%d"%c)