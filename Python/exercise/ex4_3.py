##要求： 定义Person类，并在构造函数中初始化name，age，sex属性，
# action函数输出“name(传入的人名)可以与人交朋友.”。
# 定义Teacher类继承自Person类，调用基类的构造函数，
# 并在构造函数中初始化title(职称)、course（课程）属性，
# 重写action函数，输出 “**老师是**职称，可以教授**课程。”
# 定义student类继承自Person类，调用基类的构造函数，
# 并在构造函数中初始化grade(年级)、major（专业）属性，
# 重写action函数，输出 “**同学是**专业**年级，具有很强的学习能力。”
class person():
    def __init__(self,name,age,sex):
        self.name = name
        self.age = age
        self.sex = sex

    def action(self):
        print(self.name,"可以与人交朋友")

class teacher(person):
    def __init__(self,name,age,sex,title,course):
        person.__init__(self,name,age,sex)
        self.title= title
        self.course = course

    def action(self):
        person.action(self)
        print(self.name+"老师是"+self.title+"职称，可以教授"+self.course+"课程")

a=teacher("xxx",18,"male","teacher","math")
a.action()

class student(person):
    def __init__(self, name, age, sex, grade, major):
        person.__init__(self,name,age,sex)
        self.grade= grade
        self.major = major

def action(self):
    print(self.name+'同学是',self.grade+"专业"+self.major+"年级")

b = student("xx",21,"female","IT","2019")
b.action()
