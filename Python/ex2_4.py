#设计一个函数，判断某个数是否是素数，然后调用函数输出200以内所有的素数,以每5个数为一行格式输出
c=0
print("200以内的素数有：")
def num(a):
    for i in range(2,a):
        if a%i==0:
            a=1
            break
    return a
for a in range(2,201):
    k=num(a)
    if k!=1:
         print("%4d"%k,end="")
         c+=1
         if c%5==0:
          print("")