class No ():
    def __init__(self,dado):
        self.dado = dado
        self.esquerda = None
        self.direita = None
class Arvore ():
    def __init__(self):
        self.raiz = None
        self.list = []
        
    def append(self,num,noAtual=None):
        if self.raiz:
            if (noAtual == None):
                noAtual = self.raiz
            if (noAtual.dado > num):
                # print(f'O numero {noAtual.dado} é maior que o numero {num}')
                if(noAtual.esquerda == None):
                    # print('Esquerda')
                    
                    noAtual.esquerda =No(num)
                    # print(noAtual.esquerda.dado)
                else: 
                    noAtual = noAtual.esquerda
                    self.append(num,noAtual)
            if(noAtual.dado < num):
                # print(f'O numero {noAtual.dado} é menor que o numero {num}')
                if(noAtual.direita == None):
                    # print('Direita')
                    noAtual.direita = No(num)
                    # print(noAtual.direita.dado)
                else: 
                    noAtual = noAtual.direita
                    self.append(num,noAtual)
        else:
            self.raiz = No(num)
    def _print (self,noAtual=None):
        if (noAtual == None):
            noAtual = self.raiz
        # print(noAtual.dado) pre-ordem
        if (noAtual.esquerda != None):
            x = noAtual.esquerda
            self._print(x)
        print(noAtual.dado)
        self.list.append('(')
        self.list.append(noAtual.dado)
        if (noAtual.direita != None):
            x = noAtual.direita
            self._print(x)
        self.list.append(')')
        # print(f'Esta no {noAtual.dado}')
        # print(noAtual.dado) pos-ordem
        # self.list.append(dado)
    def lista (self):
        self._print()
        print(self.list)
    def minimo (self,noAtual = None):
        if (noAtual == None):
            noAtual = self.raiz
        while(noAtual.esquerda):
            noAtual = noAtual.esquerda
        return noAtual.dado
    def maximo(self,noAtual = None):
        if(noAtual == None):
            noAtual = self.raiz
        while(noAtual.direita):
            noAtual = noAtual.direita
        return noAtual.dado
    def remover(self,num,noAtual=None) :
        if (noAtual == None):
            noAtual = self.raiz
        if (noAtual== None):
            return noAtual
        if(noAtual.dado > num):  
            noAtual = noAtual.esquerda
            print(f'esq{noAtual.dado}')
            self.remover(num,noAtual)
        elif(noAtual.dado < num):
            noAtual = noAtual.direita
            print(f'dir{noAtual.dado}')
            self.remover(num,noAtual)
        else:
            if (noAtual.direita == None and noAtual.esquerda == None):
                print(noAtual.dado)
                return None
            if (noAtual.esquerda == None):
                return noAtual.direita
            elif(noAtual.direita == None):
                return noAtual.esquerda
            else:
                subistituto =  self.minimo(noAtual.direita)
                print('olla')
                
                noAtual.dado = subistituto
                print(noAtual.direita.dado)
                noAtual.direita = self.remover(subistituto,noAtual.direita)
        return noAtual

            
            
        
        
        

            
x = Arvore()
x.append(55)
x.append(44)
x.append(33)
x.append(22)
x.append(34)
x.append(35)
x.append(64)
x.append(80)
x.append(58)
x.append(56)
# x.print()
# print(x.raiz.direita.dado)
# x.lista()
x.append(75)
x.remover(55)

x.lista()