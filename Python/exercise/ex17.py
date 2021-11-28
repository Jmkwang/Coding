for i in range(1, 10) :
    for j in range(1, 1 + i) :
        print("%d*%d=%-5d" % (i, j, i * j), end=" ")
    print()
