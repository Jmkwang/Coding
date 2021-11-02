#利用while循环找出1-n之间能被2整除，也能被3整除的数，输出时以5个数一行的格式输出
n = int(input("请输入范围："))
a = 1
hang = 0
while a<= n :
    if a%2==0 and a%3==0:
        print('%4d'%a,end=' ')
        hang+=1
        if hang%5==0:
            print('\n',end=' ')
        a=a+1
    else:a+=1