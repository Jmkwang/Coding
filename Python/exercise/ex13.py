#利用while循环实现计算1!+2!+3!+......n!,n值由键盘输入
n=int(input("Input the number:"))
a=1
b=1
sum=0
while a<=n:
    b=a*b
    sum=sum+b
    a=a+1
print("1!+2!+3!+....+n!=",sum)
