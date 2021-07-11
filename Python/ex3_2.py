#创建一个列表List1，其中元素包括1，2，3，4，5
# 1)输出此列表
# 2)为列表的尾部添加元素6
# 3)在列表尾部一次添加7、8元素
# 4)将列表的元素2删除
# 5)将列表List1删除
list1=[1,2,3,4,5]
print(list1)
list1.append(6)
print(list1)
list2=[7,8]
print(list1,list2)
del list1[1]
print(list1)
del list1