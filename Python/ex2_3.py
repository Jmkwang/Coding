a=int(input("first:"))
b=int(input("second:"))
c=int(input("third:"))
def max(a,b,c):
    if a>b:
        b=a
    if b>c:
        c=b
    return c
d=max(a,b,c)
print(a, b, c,"max=","\b%d"%d)