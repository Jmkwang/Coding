for i in range(1,1000):
    a=i%10
    b=i//10%10
    c=i//100
    if a**3+b**3+c**3==i:
        print(i,end=" ")