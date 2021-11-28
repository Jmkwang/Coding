#设计一个函数实现计算1!+2!+3!+......+n!的结果，并调用函数实现从1到10各个数字逐个阶乘累加的结果
def sum(n):
    a=1
    b=0
    for i in range(1,n+1):
        print("%d!"%i,end="+")
        a=a*i
        b=b+a
    return b
for j in range(1,11):
    k=sum(j)
    print("=%d"%k)