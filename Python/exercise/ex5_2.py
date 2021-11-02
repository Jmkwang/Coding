def getstudent(i):
    print("请输入第",i,"个学生的信息")
    try:
       name = input("姓名：")
       if name == "":
           raise Exception("姓名不能为空")

       gender = input("性别：")
       if gender != "男" and ender != "女":
           raise Exception("无效性别")

       age = input("年龄：")
       age = float(age)
       if age < 18 or age> 30:
           raise Exception("无效年龄")

       s={}
       s["name"]= name
       s["gender"] = gender
       s["age"] = age
       return s
    except Exception as err:
        print(err)
        return none
i = 1
try:
    a = open ("student.txt","w")
    while True:
        s = getstudent(i)
        if s:
            a.write (s ["name"]+"\n"+s["gender"]+"\n"+str(s["age"])+"\n")
            i += 1
        s = input ("继续输入吗？【Y/N】")
        if s != "Y" and s != "y":
            break
    a.close()
except Exception as err:
    print(err)