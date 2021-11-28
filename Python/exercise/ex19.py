a=0
for i in range(0,51):
    for j in range(0,101):
        for k in range(0,21):
            if i+2*j+5*k==100:
                a=a+1
                print("No.%d:一分%d个,两分%d个,五分%d个"%(a,i,j,k))

print(201/7)