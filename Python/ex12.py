#使用while循环实现100以内的奇数和、偶数和
a=2
sum=0
while 0 == a%2 and a<=100:
      sum=a+sum
      a=a+2
print("2+4+6+8+....+100=",sum)
a=1
sum=0
while 1 == a%2 and a<100:
      sum=a+sum
      a=a+2
print("1+3+5+7+....+99=",sum)

