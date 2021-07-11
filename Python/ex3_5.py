#假设有如下字典： dict={"a":"k1","b":"k2","c":"k3"}
# 按照要求实现以下功能：
# 1、请用循环遍历出所有的key 和 value
# 2、请在字典中增加一个键值对，“d”:"k4",输出添加后的字典
# 3、请删除字典中键值对“a”:"k1", 并输出删除后的结果
dict={"a":"k1","b":"k2","c":"k3"}
for i in dict.keys():
   print(i,dict[i])
dict["d"]="k4"
print('new',dict)
del dict["a"]
print('new2',dict)
