def sameple(s):
    j=len(s)-1
    for i in range(0,j,1):
        if s[i]!=s[j]:
            return False
        j=j+1
        i=i-1
        return True
s=input("Enter string:")
if sameple(s):
    print("对称")
else:
    print("不对称")
