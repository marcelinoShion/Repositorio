import random
arr = []
barr = [1,2,3,4,5,6,7,8,9]
for i in range(0,3):
    arr.append([0,0,0])
    
def inserir():
    lin = int(input('Insira a linha :'))
    col = int(input('Insira a coluna :'))
    x = (lin + 1) * (col + 1)
    print(x)
    print(barr)
    livre = False
    for i in barr:
        if(i == x ):
            livre = True
            return livre 
    if(livre):
        arr[lin][col] = 'x'

        barr.remove(x)
        print(barr)
    else:
        print('Insira um numero valido')
        inserir()
def printArr():
    for i in arr:
        for j in range(0,len(i)):
            print(i[j],end=' ')
            if(j == len(i)-1):
                print(' ')

def inserirBot():
    y = random.choice(barr)
    col = None 
    lin = None
    for i in range(1,3):
        for j in range(1,3):
            z = i * j
            if(z == y):
                col = j - 1
                lin = i - 1
                barr.remove(y)
                break
    if(col != None):
        print(lin , col)
        arr[lin][col] = 'o'
    else:
        inserirBot()
    


def checar(arr,player):
    for i in arr :
        if(i[0] == player  and i[1] == player  and i[2] == player ):
            return True
    for i in range(0,2):
        if(arr[0][i] == player  and arr[1][i] == player  and arr[ 2][i] == player ):
            return True
    if(arr[0][0] == player  and arr[1][1] == player  and arr[2][2] == player  or arr[0][2] == player  and arr[1][1] == player  and arr[2][0] == player  ):
        return True
while (True):
    printArr()
    inserir()
    print(checar(arr,'x'))
    inserirBot()
    print(checar(arr,'o'))
