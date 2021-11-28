p=1
for i in range(9,0,-1):
    p=(p+1)*2
    print("第%d天还剩%d个桃子"%(i,p))
print(("第一天摘了%d个桃子")%(2*p+2))