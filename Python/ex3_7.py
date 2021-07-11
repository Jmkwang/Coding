movie=['妖猫传','无问西东','流浪地球','攀登者']
actor=[['黄轩','染谷将太'],['章子怡','王力宏','祖峰'],['吴京','屈楚萧','赵金麦'],['吴京','章子怡','张译']]
print("1. combine two list into dict")
dict={}
for key,value in zip(movie,actor):
    dict[key]=value
print(dict)
print("2.list every actor in every movie")
for key in dict.keys():
    print(dict[key])
print("3. print input actors' movie")
name=input("input actor's name:")
for key in dict.keys():
    if name in dict[key]:
        print(name+"in"+key)