import menu as m
import random 

menu = 1
while menu :
    print('--------------------------------------------------------------------------------')
    print('[1] Para iniciar o Jogo')
    print('[2] Para Criar um personagem')
    print('[3] Para Criar um equipamento')
    print('[4] Para criar um item')
    print('[5] Para  mostrar')
    print('[0] Para Sair')
    print('--------------------------------------------------------------------------------')
    x = int(input(' '))
    if (x == 1):
        pass
    elif(x == 2):
        m.criarPersonagem()
    elif(x == 3):
        pass
    elif ( x == 4):
        pass
    elif ( x == 5):
        m.mostrar()
    elif (x == 0 ):
        menu = 0 
    