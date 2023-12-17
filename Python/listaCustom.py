import random
class No():
    def __init__(self,dado):
        self.dado = dado
        self.proximo = []
# pegar uma string dividila 
# depois inserir cada um 
# depois verificar se  existe um igual a ser inserida  e separa os espacos em brancos
# se houver(retorna valor) entao a ser inserida sera o proximo dela  caso contrario sera o proximo da anterior

class lista():
    def __init__(self):
        self.lista = None
        self.lst = []
    def busca(self,palavra,noAtual = None):
        lista = self.lst 
        for i in lista :
            if(i.dado == palavra):
                return i
    def estaNalista(self,palavra,noAtual = None):
        lista = self.lst 
        for i in lista :
            if(i.dado == palavra):
                return True
        return False
    def comparar(self,pesq ,ant):
        # print(ant.proximo)
        for i in range(0,len(ant.proximo)):
            if(i is None):
                continue
            else:
                if(ant.proximo[i].dado == pesq.dado):
                    return True 
        return False

    def append(self,arr,noAtual = None):
        array = arr.split(' ')
        anterior = None # remover ''
        controle = 0
        if(noAtual == None):
            noAtual = self.lista
        if(self.lista == None):
            x = No(array[0])
            self.lista = x
            self.lst.append(x)
        for i in range (0,len(array)):
            # print(f'A array : {array[i]}')
            if(array[i] == ''):
                if(array[i -1] != ''):
                    anterior = array[i -1]
                    controle = 1
                    # removendo espaço extra
                pass
            else:
                if(controle == 1):
                    # print(f'O anterior é {anterior}')
                    controle = 0
                    pass
                else:
                    anterior = array[i -1]
                pesq = self.busca(array[i],noAtual)
                if(pesq == None):
                    # cenario se houver a anterior e não houver a atual . e ligar anterior a atual 
                    ant = self.busca(anterior, noAtual)
                    # print(ant.dado + 'linha 57')
                    x = No(array[i])
                    ant.proximo.append(x)
                    self.lst.append(x)
                    
                else:
                    # se houver a anterior e a atual e anterior não ligar a atual 
                    ant = self.busca(anterior, noAtual) 
                    if(ant != None):
                        comparar = self.comparar(pesq , ant)
                        if(comparar == False):
                            ant.proximo.append(pesq)
                    
    def escolher (self , noAtual = None, passagem = 0 , ultEscolha = None):
        if(noAtual == None):
            noAtual = self.lista
        if( passagem < 100):
            print(noAtual.dado,'', end='')
            passagem += 1
            if(len(noAtual.proximo) > 1):
                ultEscolha = noAtual
                noAtual = random.choice(noAtual.proximo)
                self.escolher(noAtual,passagem, ultEscolha)
            else:
                if(noAtual == []):
                    self.escolher(ultEscolha,passagem,ultEscolha)
                else:
                    try:
                        noAtual = noAtual.proximo[0]
                        self.escolher(noAtual,passagem,ultEscolha)
                    except:
                        print(noAtual.dado)
        else:
            print('.')
                
        
        
            
        
           

lst = lista()

arr = 'O Brasil é um país de dimensões continentais localizado na América do Sul, com capital em Brasília. Apresenta uma enorme diversidade paisagística, econômica e cultural."O Brasil é o maior país da América do Sul, com área de mais de 8,5 milhões de km². Tem como capital a cidade de Brasília. Apresenta uma grande variedade climática e paisagística, que pode ser analisada mediante os domínios morfoclimáticos. A população brasileira chegou a 213.317.639 habitantes em 2021, de acordo com o IBGE, com mais de 87% dela vivendo nas cidades. São Paulo, capital do estado de mesmo nome, constitui a maior área urbana do Brasil, com 12 milhões de habitantes. A economia brasileira, embora liderada pelo setor terciário, se destaca também em áreas como a indústria petroquímica e automobilística e na produção agropecuária, que tem a soja como carro-chefe."'
lst.append(arr)

lst.escolher()
print(lst.estaNalista('Argentina'))



