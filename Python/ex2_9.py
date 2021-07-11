def fibo(n):
    if n<=1:
        return n
    else:
        return(fibo(n-1)+fibo(n-2))
print("前20项:")
for i in range (1,21):
    print(fibo(i))