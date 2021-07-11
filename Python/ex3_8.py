#no one can reach out to others in the same way that you can.
#no one can speak your words. no one can convey your meanings. no one can smile your smile.
#no one else can bring the whole unique impact of you to another human being.
print("1.")
str='''no one can reach out to others in the same way that you can.
no one can speak your words. no one can convey your meanings. no one can smile your smile.
no one else can bring the whole unique impact of you to another human being.'''
str=str.lower()
str=str.replace('.',' ')
str=str.replace('\n',' ')
print(str)
print()
print("2.")
list=str.split(" ")
print(list)
print()
print("3.")
dict={}
for word in list:
    if word in dict.keys():
        dict[word]+=1
    else:
        dict[word]=1
print(dict)
print(sorted(dict.items()))
print()
print("4.")
max_value=max(dict.values())
for key,value in dict.items():
    if max_value==value:
        print(key,value)