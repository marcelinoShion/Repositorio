class No ():
    def __init__(self,dado):
        self.dado = dado 
        self.esquerda = None 
        self.direita = None

class arvoreBalanceada():
    def __init__(self):
        self.raiz = None

    def inserir(self,num , noAtual = None) :
        if(self.raiz):
            if(noAtual == None):
                noAtual = self.raiz 
            if(num < noAtual.dado):
                if (noAtual.esquerda == None ):
                    noAtual.esquerda = No(num)   
                else:
                    x = noAtual.esquerda
                    self.inserir(num,x)
            if(num > noAtual.dado):
                if(noAtual.direita == None):
                    noAtual.direita = No(num)
                else:
                    x = noAtual.direita
                    self.inserir(num,x)
        else:
            self.raiz = No(num)
    def imprimir(self, noAtual = None):
        
        if(noAtual == None):
            noAtual = self.raiz
        
        if(noAtual.esquerda != None):
            x = noAtual.esquerda
            self.imprimir(x)
        print(noAtual.dado)
        if(noAtual.direita != None):
            x = noAtual.direita
            self.imprimir(x)
    def minimo(self,noAtual = None):
        
        if(noAtual == None):
            noAtual = self.raiz 
        while(noAtual.esquerda):
            noAtual = noAtual.esquerda
        return noAtual.dado
    def maximo(self):
        noAtual = self.raiz 
        while(noAtual.direita):
            noAtual = noAtual.direita
        return noAtual.dado
    def remocao(self,num,noAtual= None):
        if(noAtual == None):
            noAtual = self.raiz
        if(noAtual == None):
            return None
        if(num < noAtual.dado):
            noAtual.esquerda = self.remocao(num,noAtual.esquerda)
            
        elif(num > noAtual.dado):
            noAtual.direita = self.remocao(num,noAtual.direita)
        else:
            if(noAtual.esquerda == None and noAtual.direita == None):
                return None
            if(noAtual.esquerda == None):
                return noAtual.direita
            elif(noAtual.direita == None):
                return noAtual.esquerda
            else:
                print(noAtual.dado)
                subistituo = self.minimo(noAtual.direita)
                print(noAtual.esquerda.dado)
                noAtual.dado = subistituo
                print('ola')
                print()
                
                noAtual.direita = self.remocao(subistituo,noAtual.direita)
                
        return noAtual

        
arv = arvoreBalanceada()
arv.inserir(5)
arv.inserir(50)
arv.inserir(48)
arv.inserir(44)
arv.inserir(25)
arv.inserir(3)
arv.inserir(1)
arv.inserir(4)
# # arv.imprimir()
# dd = arv.raiz.direita 

# print(arv.raiz.direita.dado)
# print(dd.dado)
# print(arv.minimo(dd))
arv.remocao(5)
arv.imprimir()       
