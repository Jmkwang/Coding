#写一个函数，给定一个数字，求其阶乘
a=int(input("number:"))
def n(b):
     c=1
     for i in range(1,b+1):
        print(i,end="*")
        c=c*i
     return c
d=n(a)
print("\b=","\b%d"%d)