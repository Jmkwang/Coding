# 鸡兔同笼，有68只脚，兔或鸡的个数不超过20只，问兔和鸡各有多少只？有多少种组合方法？
# 提示：用水仙花的方法实现，两个 for循环嵌套处理
a=1
for c in range(1,21):
    for d in range(1,21):
        if 4*d+2*c==68:
             print ("Plan(%d):rabbit %d, chicken %d"%(a,d,c))
             a=a+1