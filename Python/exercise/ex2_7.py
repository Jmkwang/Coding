def isLeap(y):
    return y%400==0 or y%4==0 and y%100!=0

def maxDays(y,m):
    d=30
    if m==1 or m==3 or m==5 or m==7 or m==8 or m==10 or m==12:
        d=31
    elif m==2:
        d=29 if isLeap(y) else 28
    return d

def countDays(y,m,d):
    days=d
    if m>=2:
        days+=31
    if m>=3:
        days+=29 if isLeap(y) else 28
    if m>=4:
        days+=31
    if m>=5:
        days+=30
    if m>=6:
        days+=31
    if m>=7:
        days+=30
    if m>=8:
        days+=31
    if m >= 9:
        days += 31
    if m>=10:
        days+=30
    if m>=11:
        days+=31
    if m>=12:
        days+=30
    return days
def countWeek(y,m):
    w=(y-1)+(y-1)//400+(y-1)//4-(y-1)//100+countDays(y,m,1)
    return w%7

def printMonth(y,m):
    w=countWeek(y,m)
    md=maxDays(y,m)
    print("%-6s%-6s%-6s%-6s%-6s%-6s%-6s"%("sum","mon","tue","wed","thu","fri","sat"))
    for i in range(w):
        print("%-6s"% "",end="")
    for d in range(1,md+1):
        print("%-6s" % d, end="")
        w=w+1
        if w%7==0:
            print()

y=int(input("请输入年份："))
for m in range(1,13):
    print()
    print("---------------",y,"年",m,"月----------------")
    printMonth(y,m)
    print()