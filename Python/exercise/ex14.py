#利用while循环实现fibonacci数列前20项
f1=0
f2=1
i=1
print("%4d%4d"%(f1,f2),end="")
while i<=18:
    f3=f1+f2
    f1=f2
    f2=f3
    i=i+1
    print("%6d"%f3,end="")
