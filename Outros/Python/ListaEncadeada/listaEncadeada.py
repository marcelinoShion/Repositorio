class No :
    def __init__(self,dado):
        self.dado = dado
        self.proximo = None
class ListaEncadeada :
    def __init__(self):
        self.lista = None
    def append (self,num):
        noAtual = self.lista
        if (noAtual):
            while(noAtual.proximo):
                noAtual = noAtual.proximo
            noAtual.proximo = No(num)
        else:
            self.lista = No(num)
    def unshift(self):
        self.lista = self.lista.proximo
    def remover(self , num):
        noAtual = self.lista
        if(num == noAtual.dado):
            self.lista = noAtual.proximo
        else :
            noAnterior = noAtual
            while(noAtual!= None):
                noAnterior = noAtual
                noAtual = noAtual.proximo
                if(noAtual.dado == num):
                    noAnterior.proximo = noAtual.proximo
                    break
    def appendOrd(self,num):
        noAtual = self.lista 
        if(num < noAtual.dado):
            no = No(num)
            no.proximo = noAtual
            self.lista = no
        else:
            noAnterior = None
            while (noAtual.proximo):
                noAnterior = noAtual
                noAtual = noAtual.proximo
                if(num < noAtual.dado):
                    no = No(num)
                    noAnterior.proximo = no
                    no.proximo = noAtual
                    return 0
                
            noAtual.proximo = No(num)
    def busca (self , num):
        noAtual = self.lista 
        while(noAtual):
            if (noAtual.dado == num):
                return 1
            noAtual = noAtual.proximo
        return 0
           
            
    def print(self):
        noAtual = self.lista 
        while(noAtual):
            print(noAtual.dado)
            noAtual = noAtual.proximo
lst = ListaEncadeada()

lst.append(33)
lst.append(36)
lst.append(55)
lst.append(444)
# lst.remover()
lst.appendOrd(29)
lst.appendOrd(25)
lst.appendOrd(555)
lst.appendOrd(455)
lst.appendOrd(600)
lst.unshift()
lst.unshift()
lst.print()

print(lst.busca(600))

                


