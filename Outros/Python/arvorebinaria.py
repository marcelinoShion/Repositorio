class Arvore :
    def __init__(self, raiz = None , esquerda = None , direita = None) :
        self.raiz = raiz
        self.esquerda = esquerda
        self.direita = direita 
    def append (self , item , i = None):
        print(self.raiz)
        if (self.raiz == None) :
            self.raiz = item
            print(f' o Numero {self.raiz}')
            return self.raiz
        elif(item < self.raiz):
            n2 = Arvore()
            self.esquerda = self.append(item)
            return
        else:
            print('ola')
            self.direita = self.append(item)
            return

n1 = Arvore()
# n1.raiz = 5
# n2  = Arvore(6)
# n1.esquerda = n2
n1.append(5)
n1.append(6)
n1.append(4)
# n1.append(3)
print(n1.esquerda)
