def FirstReverse(str):
    stringlength = len(str)
    newstring = ""
    for x in range(stringlength-1, -1, -1):
        newstring += str[x]
    str = newstring
    return str
    

print(FirstReverse("Monday"))
