class car:
    brand='大众'
    model='桑塔纳'
    def set(self,n,k):
        self.number=n
        self.speed=k
        print('manufactor：%s, model: %s, number: %s, speed: %s'%(self.brand,self.model,self.number,self.speed))
    def jiasu(self):
        self.speed+=20
        print('%d迈'%self.speed)

print('采用对象名调用实例方法')
car1=car()
print('car1:',end="")
car1.set('粤A0001',40)
for i in range(1,5):
    print('加速%d次后：'%i,end="")
    car1.jiasu()
print('---------------')
print('采用类名调用实例方法')
car2=car()
print('car2:',end='')
car.set(car2,'粤A8888',60)
for i in range(1,5):
    print('加速%d次后：'%i,end="")
    car.jiasu(car2)