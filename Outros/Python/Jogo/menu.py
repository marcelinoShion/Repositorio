import personagem as p
import random
n = ['Oliver','Olivia','Mika','Ara','Orth']
Personagens = []
Equipamentos = []
Itens = []
def criarPersonagem():
    print('[1] Adicionar Atributos apelatorios')
    print('[2] Customisar')
    print('[0] Cancelar')
    escolha = int(input(''))
    if(escolha == 1):
        nome =  random.choice(n)
        vida = random.randint(20,100)
        mana = random.randint(20,100)
        nivel = random.randint(1,50)
        ataque = random.randint(20,100)
        defesa =random.randint(20,100)
        agilidade = random.randint(20,100)
        inteligencia = random.randint(20,100)
        sorte = random.randint(20,100)
        Personagens.append(p.Personagem(nome,vida,mana,nivel,ataque,defesa,agilidade,inteligencia,sorte))
    elif(escolha == 2):
        print('Insira o Nome do personagem: ')
        nome = input ()
        print('Insira os pontos de Vida do personagem ')
        vida = int(input())
        print('Insira os pontos de Mana do personagem ')
        mana = int(input())
        print('Insira os pontos de Nivel do personagem ')
        nivel = int(input())
        print('Insira os pontos de Ataque do personagem ')
        ataque = int(input())
        print('Insira os pontos de Defesa do personagem ')
        defesa = int(input())
        print('Insira os pontos de Agilidade do personagem ')
        agilidade = int(input())
        print('Insira os pontos de Inteligencia do personagem ')
        inteligencia = int(input())
        print('Insira os pontos de Sorte do personagem ')
        sorte = int(input())
        Personagens.append(p.Personagem(nome,vida,mana,nivel,ataque,defesa,agilidade,inteligencia,sorte))
    elif (escolha == 0):
        return 0
def mostrar():
    print('--------------------------------------------------------------------------------')
    print('[1] Para mostrar todos os Personagens')
    print('[2] Para mostrar todos os Equipamentos')
    print('[3] Para mostrar todos os Itens')
    print('[0] Cancelar')
    print('--------------------------------------------------------------------------------')
    escolha = int (input())
    nome = None
    if( escolha == 1):
        nome = Personagens
    elif (escolha == 2):
        nome = Equipamentos
    elif(x == 3):
        nome = Itens
    elif (x == 0):
        return 0
    else:
        print('Numero incorreto')
    
    for i in range(0,len(nome)):
        print(f'Nome: {nome[i].nome}   Nivel: {nome[i].nivel}   Vida: {nome[i].vida}   Mana: {nome[i].mana}   Ataque: {nome[i].ataque}   Defesa: {nome[i].defesa}   Agiliade: {nome[i].agilidade}   Inteligencia: {nome[i].inteligencia}')

