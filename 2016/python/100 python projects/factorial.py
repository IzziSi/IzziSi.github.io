
def FirstFactorial(num):
    factorialArray = []
    solvent = "( "
    for x in range(1, num + 1):
        factorialArray.append(x)
        if x == int(num):
            for i in factorialArray:
                if i == 1:
                    num = 1
                solvent += str(i) + "*"
                num = num * i
                if i == len(factorialArray):
                    solvent += ") = " + str(num)
    print(solvent)
                
                    


FirstFactorial(4)
