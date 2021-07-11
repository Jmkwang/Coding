#创建一个列表List1，其中元素包括3，1，5，4，2，3
#1、查看元素5的索引值
#2、查看元素3的个数
#3、将List1翻转
#4、将List1按降序排列
list1=[3,1,5,4,2,3]
print("index for 5:",list1.index(5))
print("count of 3:",list1.count(3))

list1.reverse()
print(list1)

list1.sort(reverse=True)
print(list1)