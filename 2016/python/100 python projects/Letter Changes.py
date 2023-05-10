def LetterChanges(str):
    characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', ' ']
    newstring = ""
    for x in range(0, len(str)):
       if characters.index(str[x])+1 >= len(characters):
           newstring += characters[len(characters)-1]
       else:
          newstring += characters[characters.index(str[x])+1]
    str = newstring 
    print(str)

LetterChanges("help me")

